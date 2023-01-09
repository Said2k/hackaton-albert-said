import React from 'react';
import { useAuth } from '../contexts/authContext';
import { ADMIN } from '../helpers/const';

const NotFoundPage = () => {
    const {users, handleLogout} = useAuth()
const {user} = users
    return (
        <div>
            {user == ADMIN ? (<h1>{user.email} Admin</h1>): (<h1>{user.email}</h1>)}
            <button onClick={()=>handleLogout()}>Logout</button>
            <h1>404 NOT FOUND</h1>
        </div>
    );
};

export default NotFoundPage;