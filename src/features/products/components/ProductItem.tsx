import Grid from '@mui/material/Grid2';
import { Card, CardActions, CardContent, CardHeader, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  price: number;
  id: string;
}

const ProductItem: React.FC<Props> = ({title, price, id}) => {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
      <Card>
        <CardHeader title={title}/>
        <CardContent>
          <strong>Price: {price} KGS</strong>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={'/products/' + id}>
            <ArrowForward/>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;