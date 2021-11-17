import HotProductsTable from "./HotProductsTable";

export default function HotProducts() {
  let allProductsList = [
    { image: "images/hot-chair.jpg", name: "Waiting Chair", price: "80" },
    { image: "images/hot-table.jpg", name: "Coffe Table", price: "100" },
    { image: "images/hot-sofa.jpg", name: "Fabric Sofa", price: "150" },
    { image: "images/hot-lamp.jpg", name: "Wooden Lamp", price: "30" },
  ];

  return (
    <section className="hot">
      <h1 className="title">Hot Products</h1>
      <nav className="hot_selector">
        <span className="hot1">All</span>
        <span className="hot2">Chair</span>
        <span className="hot3">Table</span>
        <span className="hot4">Sofa</span>
        <span className="hot5">Decoration</span>
      </nav>
      <HotProductsTable productsList={allProductsList} />
    </section>
  );
}
