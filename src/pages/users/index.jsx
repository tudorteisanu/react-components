import { headers } from "../../mock";
import TableContent from "../../components/DataTable";
import { UserCell } from "./UserCell";
import { UserActions } from "./UserActions";
import UsersFilter from "./UsersFilter";
import { useSelector } from "react-redux";

const Test = () => {
  const items = useSelector((state) => state.users.items);

  return (
    <>
      <UsersFilter />
      <TableContent
        headers={headers}
        items={items}
        cell={<UserCell />}
        actions={<UserActions />}
      ></TableContent>
    </>
  );
};

export default Test;
