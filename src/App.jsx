import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

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
