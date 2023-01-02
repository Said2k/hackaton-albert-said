import ContextAuthProvider, { useAuth } from "./contexts/authContext";
import ContextProductProvider from "./contexts/productContext";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (

    <ContextProductProvider>
      <ContextAuthProvider>
   <MainRoutes/>
   </ContextAuthProvider>
   </ContextProductProvider>
 
  );
}

export default App;
