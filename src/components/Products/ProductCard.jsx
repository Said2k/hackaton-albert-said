// import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { useProducts } from '../../contexts/productContext';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ADMIN } from '../../helpers/const';
import { Button } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ProductCard = ({item}) => {
    const navigate = useNavigate('')
    const {deleteProduct} = useProducts()
    const {users}= useAuth()
    const {email} = users.user

    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
    
      const [expanded, setExpanded] = React.useState(false);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };


    //  console.log(email);


  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActions sx={{display: 'flex', flexDirection:"row-reverse"}}>
            <IconButton>
            <StarBorderIcon/>
            </IconButton>
           
        </CardActions>
  
      <CardMedia
        component="img"
        height="194"
        image={item.picture}
        sx={{cursor: 'pointer'}}
        onClick={()=>navigate(`/products/${item.id}`)}
        // alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="dark" sx={{fontWeight: 600, fontSize: '20px'}}>
         {item.name}
        </Typography>
        <Typography
          sx={{ color: "green", fontWeight: "700" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.price}$
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {email ==ADMIN? (
            <>
            <Button onClick={()=>deleteProduct(item.id)}>Delete</Button>
            <Button onClick={()=>navigate(`/edit/${item.id}`)}>Edit</Button>
            </>
        ) : (
            <>
            <IconButton>
                <ShoppingCartIcon/>
                <FavoriteIcon />
                
            </IconButton>
            </>
        )}
        
     
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{item.description}</Typography>
        
         
        </CardContent>
      </Collapse>
    </Card>
  );

    
};

export default ProductCard;