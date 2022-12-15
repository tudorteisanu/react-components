import { headers, items } from "../../mock";
import TableContent from "../../components/DataTable";
import { UserCell } from "./UserCell";
import { UserActions } from "./UserActions";

const Test = () => {
  return (
    <TableContent
      headers={headers}
      items={items}
      cell={<UserCell />}
      actions={<UserActions />}
    ></TableContent>
  );
};

export default Test;
