import userService from "./user-service";

export const UserActions = ({ item }) => {
  return (
    <>
      <button onClick={() => userService.edit(item.id)}>edit {item.id}</button>
      <button onClick={() => userService.ban(item.id)}>ban {item.id}</button>
      <button onClick={() => userService.unban(item.id)}>
        unban {item.id}
      </button>
    </>
  );
};
