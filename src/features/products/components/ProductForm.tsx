import { ChangeEvent, FormEvent, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { ProductMutation } from '../../../types';
import FileInput from '../../../components/FileInput/FileInput.tsx';


interface Props {
  onSubmit: (product: ProductMutation) => void;
}

const initialState = {
  title: '',
  price: '',
  description: '',
  image: null,
};

const ProductForm: React.FC<Props> = ({onSubmit}) => {
  const [form, setForm] = useState<ProductMutation>(initialState);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    onSubmit({...form});
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const fileEventChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;

    if (files) {
      setForm(prevState => ({
        ...prevState,
        [name]: files[0] || null,
      }))
    }
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

        <Grid size={{xs: 12}}>
          <FileInput  name="image" label="Image" onGetFile={fileEventChangeHandler}/>
        </Grid>


        <Grid>
          <Button type="submit" color="primary">Create</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;