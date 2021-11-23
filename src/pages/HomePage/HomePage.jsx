import { Home } from "./HomePage.styled";
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Products from "../../components/Products";
import CategoriesGrid from "../../components/CategoriesGrid";
import Button from "../../components/Button";
import featuredProducts from '../../mocks/en-us/featured-products.json';

const loadSlider = (data) => {
    return (
        <AwesomeSlider
            bullets={false}
            infinite
        >
            {data.results.map(result => {
                let {data: { main_image: mainImage }, id} = result;
                return (
                    <div key={id} data-src={mainImage.url}></div>
                );
            })}
        </AwesomeSlider>
    );
};

const HomePage = ({toggleHomePage}) => {
    const { data, isLoading } = useFeaturedBanners();
    return(
        <Home>
            {isLoading ? "Loading slider..." : loadSlider(data)}
            <CategoriesGrid/>
            <Products items={featuredProducts.results} title="Featured Products"/>
            <Button text="View All Products" handleOnClick={toggleHomePage}/>
        </Home>
    );
};

export default HomePage;