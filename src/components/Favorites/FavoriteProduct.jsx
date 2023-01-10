import { Button, Grid, IconButton, Paper } from '@mui/material';
import { Box, display } from '@mui/system';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/productContext';
import './favorites.css'
import ClearIcon from '@mui/icons-material/Clear';
import { useBusket } from '../../contexts/busketContext';
import './favorites.css'

const FavoriteProduct = () => {
    const {favorites, removeProductInFavorites,getFavorites} = useProducts()
    const {addProductToCart} = useBusket()
  
    const {products} = favorites

    useEffect(()=>{
        getFavorites()
    },[])

        console.log(favorites.products);
    return (
        <div className='container__favorite'>
          
    
        {products?.map((item)=>
        <Grid 
        className='block__favorite'>
                
            <Grid 
            sx={{
                display: 'flex'}}>
                <Grid
                    className='favorites__image' >
                    <img  
                    src={item.pick.picture}  
                     alt=""  />
                    </Grid>
            </Grid>
            <Grid sx={{marginLeft: '10px'}}>
                <Grid sx={{display: 'flex',
                flexDirection: 'row-reverse'
                }}>
                <IconButton onClick={()=>removeProductInFavorites(item.pick.id)}>
                    <ClearIcon/>
                </IconButton>
                </Grid>
            
                <div className='favorites__info'>
                <h4>{item.pick.name}</h4>
                <p className='favorites__price'>Цена: 
                <p>{item.pick.price}$
                </p></p>
                <p className='favorites__description'>{item.pick.description}</p>
            </div>
                
            <Button id='favorites__button' onClick={()=>addProductToCart(item.pick)}>Добавить в корзину</Button>
            </Grid>
        </Grid>
        )}
                </div>


    
    );
};

export default FavoriteProduct;