import { AccentRow, TableContainer } from "./Table.styled";

export default function Table({ header = [], data }) {
  const headerCells = (
    <tr>
      {header.map((name, index) => (
        <th key={index}>{name}</th>
      ))}
    </tr>
  );

  const rows = data.map((row, index) => {
    const cells = row.map((value, index) => <td key={index}>{value}</td>);
    return index % 2 === 0 ? (
      <tr key={index}>{cells}</tr>
    ) : (
      <AccentRow key={index}>{cells}</AccentRow>
    );
  });

  return (
    <TableContainer>
      {header.length > 0 && <thead>{headerCells}</thead>}
      <tbody>{rows}</tbody>
    </TableContainer>
  );
}
