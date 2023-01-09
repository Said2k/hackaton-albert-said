import React from "react";
import CreateProduct from "../components/Products/CreateProduct";
import { useAuth } from "../contexts/authContext";

const AdminPage = () => {
  const { users, handleLogout } = useAuth();
  const { user } = users;

  return (
    <div>
      <CreateProduct />
    </div>
  );
};

export default AdminPage;
