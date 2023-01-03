import { CircularProgress, Grid, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/productContext';
import ProductCard from './ProductCard';

const ProductList = () => {

    const {getProducts, products} = useProducts()
    const [page, setPage] = useState(1)

    const productsPerPage = 3

    const count = Math.ceil(products.length / productsPerPage)

    const handleChange = (e,p) =>{
        setPage(p)
    }
    console.log(products);

    const paramsPage = () =>{
        const begin = (page-1) * productsPerPage
        const end = begin + productsPerPage
        return products.slice(begin,end);
    }

    useEffect(()=>{
        getProducts()
    },[])
    // console.log(products);
    return (
       <Grid item  sx={{ width: '100%' , alignItems: 'center', display: "flex", flexWrap: "wrap", flexDirection: 'column' }}>
        <Box sx={{
            width: '100%',
          display: "flex",
          justifyContent: 'space-around',
          flexWrap: "wrap",
          minHeight: "40vh",
          gap: "10px",
        }}>
            {products.length>0 ? (paramsPage().map((item)=>(
                <ProductCard item={item} key={item.id}/> ))) : (<CircularProgress color='inherit' />

            )}
        </Box>
        <Pagination  
        sx= {{m:3}}
        count ={count}
        page={page}
        onChange={handleChange}
        shape="rounded"

        />
       </Grid>
    );
};

export default ProductList;