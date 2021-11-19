import {
  HotHeader,
  HotOption,
  HotProductsContainer,
  HotTitle,
} from "./HotProducts.styled";
import HotProductsTable from "./HotProductsTable";

export default function HotProducts() {
  let allProductsList = [
    { image: "images/hot-chair.jpg", name: "Waiting Chair", price: "$80.00" },
    { image: "images/hot-table.jpg", name: "Coffe Table", price: "$100.00" },
    { image: "images/hot-sofa.jpg", name: "Fabric Sofa", price: "$150.00" },
    { image: "images/hot-lamp.jpg", name: "Wooden Lamp", price: "$30.00" },
    { image: "images/hot-sofa.jpg", name: "Fabric Sofa", price: "$150.00" },
    { image: "images/hot-lamp.jpg", name: "Wooden Lamp", price: "$30.00" },
    { image: "images/hot-table.jpg", name: "Coffe Table", price: "$100.00" },
    { image: "images/hot-chair.jpg", name: "Waiting Chair", price: "$80.00" },
  ];

  return (
    <HotProductsContainer>
      <HotHeader>
        <HotTitle>Hot Products</HotTitle>
        <div>
          <HotOption active>All</HotOption>
          <HotOption>Chair</HotOption>
          <HotOption>Table</HotOption>
          <HotOption>Sofa</HotOption>
          <HotOption>Decoration</HotOption>
        </div>
      </HotHeader>
      <HotProductsTable productsList={allProductsList} />
    </HotProductsContainer>
  );
}
