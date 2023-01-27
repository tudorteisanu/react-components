import { headers } from "./config/headers";

import { useSelector } from "react-redux";
import UsersFilter from "../../components/modules/users/UsersFilter";
import { UserCell } from "../../components/modules/users/UserCell";
import { UserActions } from "../../components/modules/users/UserActions";
import { DataTable } from "../../components/base/DataTable";

const Test = () => {
  const items = useSelector((state) => state.users.items);

  return (
    <>
      <UsersFilter />
      <DataTable
        headers={headers}
        items={items}
        cell={<UserCell />}
        actions={<UserActions />}
      ></DataTable>
    </>
  );
};

export default Test;
