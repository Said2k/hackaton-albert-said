import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ProductList from '../components/Products/ProductList';

const ProductsPage = () => {
    return (
        <Box p={5}>
            ProductsPage
            <Grid container spacing={3}>
                <ProductList/>
            </Grid>
        </Box>
    );
};

export default ProductsPage;