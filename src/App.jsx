import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./contexts/CartContext";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  const [cart, setCart] = useState([]);

  return (
    <main>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navigation />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </main>
  );
}

export default App;
