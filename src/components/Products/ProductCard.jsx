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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ADMIN } from '../../helpers/const';
import { Button, Grid, Typography } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from '@mui/icons-material/Star';
import { useBusket } from '../../contexts/busketContext';
import './ProductList.css'
const ProductCard = ({item}) => {
    const navigate = useNavigate('')
    const {deleteProduct,addProductsInFavorites,favorites,} = useProducts()
    const {users}= useAuth()
    const {email} = users.user

  const {addProductToCart, checkProductInCart,} = useBusket() 


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


  
console.log(item);

  return (
    <Card className='product__card'>
        <CardActions 
        sx={{
          display: 'flex',
         flexDirection:"row-reverse",
          justifyContent: 'space-between'}}>
        {email == ADMIN ? (<></>) : 
        (<IconButton onClick={()=>addProductsInFavorites(item)}>

          {favorites.products.filter((elem)=>elem.pick.id ==item.id).length? (<StarIcon fontSize='large' sx={{color:'brown'}}/>) : (<StarIcon fontSize='large' sx={{color: 'none'}}/>)}
          
        </IconButton>)
        
        }
      <Grid 
      sx={{
        
        border: '2px solid red',
         width: '20%',
         color: 'red', textAlign: 'center',
         fontWeight: 600,
         padding: '2px',
         fontSize: '14px',
         }}>
        NEW
      </Grid>

        
           
        </CardActions>
  
      <Grid
        height="194px"
        sx={{
          cursor: 'pointer',
           backgroundImage: `url(${item.picture})`, backgroundPosition: 'center',
           backgroundSize: '75%' ,
           width: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        onClick={()=>navigate(`/products/${item.id}`)}
      />
      <CardContent>
        <Typography 
        variant="body1" 
        color="dark" sx={{
          fontWeight: 600, 
          fontSize: '20px'}}>
         {item.name}
        </Typography>
        <Typography
          sx={{ 
            color: "green", 
            fontWeight: "700" }}
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
            <IconButton onClick={()=>addProductToCart(item)}>
            {checkProductInCart(item.id) ? (
              <>
                <ShoppingCartIcon
                  sx={{
                    color: "brown",
                  }}
                />
              </>
            ) : (
              <>
                <AddShoppingCartIcon />
              </>
            )}
            </IconButton>
            <IconButton>
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