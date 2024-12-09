import { ChangeEvent, FormEvent, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { ProductMutation } from '../../../types';


interface Props {
  onSubmit: (product: ProductMutation) => void;
}

const initialState = {
  title: '',
  price: 0,
  description: '',
};

const ProductForm: React.FC<Props> = ({onSubmit}) => {
  const [form, setForm] = useState<ProductMutation>(initialState);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({...form, price: +form.price});
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={submitFormHandler}>
      <Grid container direction="column" spacing={2}>
        <Grid size={{xs: 12}}>
          <TextField
            id="title"
            name="title"
            label="Title"
            value={form.title}
            onChange={inputChangeHandler}
          />
        </Grid>

        <Grid size={{xs: 12}}>
          <TextField
            id="price"
            name="price"
            label="Price"
            value={form.price}
            onChange={inputChangeHandler}
          />
        </Grid>

        <Grid size={{xs: 12}}>
          <TextField
            multiline
            id="description"
            name="description"
            label="Description"
            value={form.description}
            onChange={inputChangeHandler}
          />
        </Grid>

        <Grid>
          <Button type="submit" color="primary">Create</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;