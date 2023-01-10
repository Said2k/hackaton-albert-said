import React from "react";
import ContextAuthProvider from "./contexts/authContext";
import BusketContextProvider from "./contexts/busketContext";
import FavoriteContextProvider from "./contexts/favorites";
import ContextProductProvider from "./contexts/productContext";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/Products/ProductCard";


// import Footer from "./components/Footer/FooterStyles";

function App() {
  return (
    <ContextProductProvider>
      <ContextAuthProvider>
        <BusketContextProvider>
          <FavoriteContextProvider>
            <Navbar />
            <MainRoutes />
          </FavoriteContextProvider>
        </BusketContextProvider>
      </ContextAuthProvider>
    </ContextProductProvider>
  );
}

export default App;
