import { UsersApi } from "./users";

const api = {
  users: () => new UsersApi(),
};

export default api;
