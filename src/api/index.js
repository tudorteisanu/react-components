import { UsersApi } from "./modules/users";

const api = {
  users: () => new UsersApi(),
};

export default api;
