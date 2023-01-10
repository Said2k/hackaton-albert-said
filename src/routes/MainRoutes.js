import React from "react";
import AboutUsPage from "../pages/AboutUsPage";
import OrdersPage from "../pages/OrdersPage";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import { useAuth } from "../contexts/authContext";
import { ADMIN } from "../helpers/const";
import EditProductPage from "../pages/EditProductPage";
import OneProductPage from "../pages/OneProductPage";
import BusketPage from "../pages/BusketPage";
import FavoritesPage from "../pages/FavoritesPage";
import ProductCard from "../components/Products/ProductCard";
import ProductCards from "../components/ProductCard/ProductCards";
import RogStrix from "../components/ModelsPC/RogStrix";

//! ======== Изменить полностью , код с прошлого проекта ========

const MainRoutes = () => {
  const { users } = useAuth();
  const { user } = users;
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about-us",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 4,
    },

    {
      link: "/orders",
      element: <OrdersPage />,
      id: 5,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 6,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 7,
    },
    {
      link: "/products/:id",
      element: <OneProductPage />,
      id: 8,
    },
    {
      link: "/cart",
      element: <BusketPage />,
      id: 9,
    },
    {
      link: "favorite",
      element: <FavoritesPage />,
      id: 10,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];
  // console.log(user);
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email == ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
