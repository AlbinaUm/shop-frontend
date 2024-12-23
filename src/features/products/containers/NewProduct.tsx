import ProductForm from "../components/ProductForm.tsx";
import { ProductMutation } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { createProduct } from "../productsThunk.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { selectCreateLoading } from "../productsSlice.ts";

const NewProduct = () => {
  const dispatch = useAppDispatch();
  const isCreateLoading = useAppSelector(selectCreateLoading);
  const navigate = useNavigate();

  const onSubmitForm = async (product: ProductMutation) => {
    await dispatch(createProduct(product));
    toast.success("Product was successfully created!");
    navigate("/products");
  };

  return (
    <>
      {isCreateLoading ? (
        <CircularProgress />
      ) : (
        <ProductForm onSubmit={onSubmitForm} />
      )}
    </>
  );
};

export default NewProduct;
