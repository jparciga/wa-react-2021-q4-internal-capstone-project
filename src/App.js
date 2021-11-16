import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import HomePage from './pages/HomePage';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
