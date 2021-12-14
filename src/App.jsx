import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <main>
      <CartProvider>
        <Navigation />
        <Outlet />
        <Footer />
      </CartProvider>
    </main>
  );
}

export default App;
