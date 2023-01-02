import React from 'react';
import { useAuth } from '../contexts/authContext';

const HomePage = () => {
    const {users}=useAuth()
    return (
        <div>
           {users? <h1>{users.email}</h1> : <h1>не авторизован</h1>} 
        </div>
    );
};

export default HomePage;