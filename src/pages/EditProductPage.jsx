import { Box } from '@mui/material';
import React from 'react';
import EditProduct from '../components/Products/EditProduct';

const EditProductPage = () => {
    return (
        <Box sx={{marginBottom: '150px'}}>
            <EditProduct/>
        </Box>
    );
};

export default EditProductPage;