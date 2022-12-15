export const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className={"TableRow"}>
        {headers.map(({ text }, index) => (
          <th key={index} className={"TableCell"}>
            {text}
          </th>
        ))}
      </tr>
    </thead>
  );
};
