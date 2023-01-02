import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/productContext';
import ProductCard from './ProductCard';

const ProductList = () => {

    const {getProducts, products} = useProducts()


    useEffect(()=>{
        getProducts()
    },[])
    // console.log(products);
    return (
       <Grid item  sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}>
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "40vh",
          gap: "10px",
        }}>
            {products.map((item)=>(
                <ProductCard item={item} key={item.id}/> 

            ))}
        </Box>

       </Grid>
    );
};

export default ProductList;