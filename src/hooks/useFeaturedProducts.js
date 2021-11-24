import useData from 'hooks/useData';

const useFeaturedProducts = () => {
    const fileName = 'featured-products.json';
    const mapFunction = ({id, data: {name, mainimage: { url }, category: { slug }, price }}) => {
        return { id, url, name, "category": slug, price };
    };

    const [productCategories] = useData(fileName, mapFunction);
    return [productCategories];
};

export default useFeaturedProducts;