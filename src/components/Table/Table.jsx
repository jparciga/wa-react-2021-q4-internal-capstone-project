import { AccentRow, TableContainer } from "./Table.styled";

export default function Table({ data }) {
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
      <tbody>{rows}</tbody>
    </TableContainer>
  );
}
