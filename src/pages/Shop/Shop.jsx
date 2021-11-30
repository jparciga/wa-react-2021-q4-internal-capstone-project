import ProductFilter from "../../components/ProductFilter";
import { LOADING_TEXT } from "../../utils/constants";
import { useCategories } from "../../utils/hooks/useCategories";

export default function Shop() {
  const categoriesData = useCategories();

  const categories = categoriesData.isLoading
    ? [{ id: LOADING_TEXT, name: LOADING_TEXT }]
    : categoriesData.data.results.map(({ id, data }) => ({
        id,
        name: data.name,
      }));

  const products = require("../../mocks/en-us/products.json").results.map(
    ({ data }) => ({
      typeId: data.category.id,
      image: data.mainimage.url,
      name: data.name,
      price: data.price,
    })
  );

  return <ProductFilter categories={categories} products={products} />;
}
