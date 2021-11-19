import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <main>
        <Navigation />
        <Home />
        <Footer />
      </main>
    </>
  );
}

export default App;
