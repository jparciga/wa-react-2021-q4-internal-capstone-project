import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <main>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
