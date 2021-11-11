// import logo from './logo.svg';
import './App.css';
import './Home.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function Header() {
  return(
    <header>
      <ul>
      <li>The logo</li>
      <li>Search Bar</li>
      <li>User</li>
      <li>Cart</li>
      </ul>
    </header>
  )
}

function Footer() {
  return(
    <footer>
      <h3>Ecommerce Name</h3>
      <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
    </footer>
  )
}

function Content({children}) {
  return(
    <main>
      {children}
    </main>
  )
}
function ProductCard({productName, ...props}) {
  return(
    <div className="Home-ProductCard" {...props}>
      {productName}
    </div>
  )
}


function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header></Header>
      <Content>
        <div>
        <div className="Home-Slider">Slider Hero</div>
        <div className="Home-Categories">Categories</div>
        <div className="Home-FeatureProducts">
          <ProductCard productName="Chairs"/>
          </div>                
        </div>
      </Content>
      <Footer></Footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Chucho bootcamp StoreFront</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
