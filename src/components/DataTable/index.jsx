import "../../App.css";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

const DataTable = ({ items, headers, actions, cell }) => {
  return (
    <table className={"Table"}>
      <TableHead headers={headers} />
      <TableBody
        items={items}
        actions={actions}
        cell={cell}
        headers={headers}
      />
    </table>
  );
};

export default DataTable;
