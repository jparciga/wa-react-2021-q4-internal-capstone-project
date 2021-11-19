import HotProductCard from "../HotProductCard";
import { HotProductsRow } from "./HotProductsTable.styled";

export default function HotProductsTable({ productsList }) {
  let emptyProduct = { image: "", name: "", price: "", inactive: true };

  let rows = [];
  for (let steps = 0; steps < productsList.length; steps += 4) {
    let row = productsList.slice(steps, steps + 4);
    while (row.length < 4) {
      row.push(emptyProduct);
    }
    rows.push(row);
  }

  return (
    <>
      {rows.map((row, rowIndex) => (
        <HotProductsRow key={`row${rowIndex}`}>
          {row.map((product, productIndex) => (
            <HotProductCard
              key={`product${rowIndex}-${productIndex}`}
              {...product}
            />
          ))}
        </HotProductsRow>
      ))}
    </>
  );
}
