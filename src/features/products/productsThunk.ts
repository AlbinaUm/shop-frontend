import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { Product, ProductMutation } from '../../types';

export const fetchProducts = createAsyncThunk<Product[], void>(
  'products/fetchProducts',
  async () => {
    const productsResponse = await axiosApi<Product[]>('/products');
    return productsResponse.data || [];
  }
);

export const createProduct = createAsyncThunk<void, ProductMutation>(
  'products/createProduct',
  async (productMutation) => {
    await axiosApi.post('/products', {...productMutation});
  }
)