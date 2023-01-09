import { Box } from '@mui/material';
import React from 'react';
import FavoriteProduct from '../components/Favorites/FavoriteProduct';

const FavoritesPage = () => {
    return (
        <Box sx={{marginBottom: '150px'}}>
        <FavoriteProduct/>
        </Box>
    );
};

export default FavoritesPage;