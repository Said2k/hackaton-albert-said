import { Box } from '@mui/material';
import React from 'react';
import Orders from '../components/Orders/Orders';

const OrdersPage = () => {
    return (
        <Box sx={{marginBottom: '150px'}}>
            <Orders/>
        </Box>
    );
};

export default OrdersPage;