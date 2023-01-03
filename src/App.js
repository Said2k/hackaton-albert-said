import React from "react";
import ContextAuthProvider, { useAuth } from "./contexts/authContext";
import BusketContextProvider from "./contexts/busketContext";
import ContextProductProvider from "./contexts/productContext";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (

    <ContextAuthProvider>
        <ContextProductProvider>
        <BusketContextProvider>
   <MainRoutes/>
   </BusketContextProvider>
   </ContextProductProvider>
   </ContextAuthProvider>
 
  );
}

export default App;
