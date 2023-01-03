import React from 'react';
import CreateProduct from '../components/Products/CreateProduct';
import { useAuth } from '../contexts/authContext';
import { ADMIN } from '../helpers/const';

const AdminPage = () => {
const {users, handleLogout} = useAuth()
const {user} = users

    return (
        <div>
            Admin Page
            {user.email == ADMIN ? <h1>Admin {user.email}</h1> : <h2>{user.email}</h2>}
            <button onClick={()=>handleLogout()}>Logout</button>
            <CreateProduct />
        </div>
    );
};

export default AdminPage;