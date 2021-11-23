import Grid from "../Grid";
import ProductCard from "../ProductCard";
import {
  ProductsGridHeader,
  ProductsGridOption,
  ProductsGridContainer,
  ProductsGridTitle,
} from "./ProductsGrid.styled";

export default function ProductsGrid({ title }) {
  let allProductsData = [
    { image: "images/hot-chair.jpg", name: "Waiting Chair", price: "$80.00" },
    { image: "images/hot-table.jpg", name: "Coffe Table", price: "$100.00" },
    { image: "images/hot-sofa.jpg", name: "Fabric Sofa", price: "$150.00" },
    { image: "images/hot-lamp.jpg", name: "Wooden Lamp", price: "$30.00" },
    { image: "images/hot-sofa.jpg", name: "Fabric Sofa", price: "$150.00" },
    { image: "images/hot-lamp.jpg", name: "Wooden Lamp", price: "$30.00" },
    { image: "images/hot-table.jpg", name: "Coffe Table", price: "$100.00" },
    { image: "images/hot-chair.jpg", name: "Waiting Chair", price: "$80.00" },
  ];

  let allProductsList = allProductsData.map((product, index) => (
    <ProductCard
      key={`product${index}`}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ));

  return (
    <ProductsGridContainer>
      <ProductsGridHeader>
        <ProductsGridTitle>{title}</ProductsGridTitle>
        <div>
          <ProductsGridOption active>All</ProductsGridOption>
          <ProductsGridOption>Chair</ProductsGridOption>
          <ProductsGridOption>Table</ProductsGridOption>
          <ProductsGridOption>Sofa</ProductsGridOption>
          <ProductsGridOption>Decoration</ProductsGridOption>
        </div>
      </ProductsGridHeader>
      <Grid contentList={allProductsList} />
    </ProductsGridContainer>
  );
}
