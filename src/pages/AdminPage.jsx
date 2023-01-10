import { Box } from "@mui/material";
import React from "react";
import CreateProduct from "../components/Products/CreateProduct";
import { useAuth } from "../contexts/authContext";
import { ADMIN } from "../helpers/const";

const AdminPage = () => {
const {users, handleLogout} = useAuth()
const {user} = users
console.log(user);
    return (
        <Box sx={{marginBottom: '150px'}}>
          <CreateProduct />
        </Box>
    );

};

export default AdminPage;
