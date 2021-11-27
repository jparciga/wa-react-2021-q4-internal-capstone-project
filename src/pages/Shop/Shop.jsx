import ProductFilter from "../../components/ProductFilter";

export default function Shop() {
  const categories =
    require("../../mocks/en-us/product-categories.json").results.map(
      ({ id, data }) => ({
        id,
        name: data.name,
      })
    );

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
