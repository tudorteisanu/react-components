import api from "../../../api";

export const UserActions = ({ item }) => {
  const edit = async (id) => {
    try {
      await api.users().getForEdit(id);
    } catch (e) {
      console.log(e);
    }
  };

  const unban = async (id) => {
    try {
      await api.users().unban(id);
    } catch (e) {
      console.log(e);
    }
  };

  const ban = async (id) => {
    try {
      await api.users().ban(id);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <button onClick={() => edit(item.id)}>edit {item.id}</button>
      <button onClick={() => ban(item.id)}>ban {item.id}</button>
      <button onClick={() => unban(item.id)}>unban {item.id}</button>
    </>
  );
};
