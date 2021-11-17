export default function HotProductsTable({ productsList }) {
  let rows = [];
  for (let steps = 0; steps < productsList.length; steps += 4) {
    rows.push(productsList.slice(steps, steps + 4));
  }

  return (
    <table>
      {rows.map((row, rowIndex) => (
        <tr key={`row${rowIndex}`}>
          {row.map((product, productIndex) => (
            <td key={`product${rowIndex}-${productIndex}`}>
              <img
                src={product.image}
                alt={product.name}
                className="hot_item"
              />
              <p className="hot_name">{product.name}</p>
              <p className="hot_price">{product.price}</p>
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
