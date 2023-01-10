import { Box } from '@mui/material';
import React from 'react';
import { useAuth } from '../contexts/authContext';
import { ADMIN } from '../helpers/const';

const NotFoundPage = () => {
    const {users, handleLogout} = useAuth()
const {user} = users
    return (
        <Box sx={{marginBottom: '150px'}}>
            <h1>404 NOT FOUND</h1>
        </Box>
    );
};

export default NotFoundPage;