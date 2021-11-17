import { Home } from "./HomePage.styled";
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Products from "../../components/Products";

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

const HomePage = () => {
    const { data, isLoading } = useFeaturedBanners();
    return(
        <Home>
            {isLoading ? "Loading slider..." : loadSlider(data)}
            <Products title="Featured Products"/>
        </Home>
    );
};

export default HomePage;