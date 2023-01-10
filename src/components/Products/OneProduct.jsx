import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/productContext';
import './ProductList.css'

const OneProduct = () => {

    const {id} = useParams()
    const {getOneProduct, oneProduct} = useProducts()

    useEffect(()=>{
        getOneProduct(id)
    },[])

    // console.log(oneProduct);
    return (
        <Paper sx={{ m: 3, paddingBottom: '10px'}} elevation={24} className="block__paper">
      <Grid container spacing={2} className='block__oneProduct'>
        <Grid  item xs={6}>
          <img  className='oneProduct__img' src={oneProduct.picture}  alt="" />
        </Grid>
        <Grid className='oneProduct__info' item xs={6}>
          <Typography variant="h3">{oneProduct.name}</Typography>
          <Typography variant="subtitle1">{oneProduct.type}</Typography>
          <Typography variant="caption"> {oneProduct.price}$ </Typography>
          <Typography variant="caption"> {oneProduct.description} </Typography>
          <Box>
            <Button className='oneProduct__btn' variant="outlined">Добавить в корзину</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    );
};

export default OneProduct;