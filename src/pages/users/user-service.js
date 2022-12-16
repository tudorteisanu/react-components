import api from "../../api";

class UserService {
  constructor() {
    this.api = api;
  }

  async edit(id) {
    try {
      await this.api.users().getForEdit(id);
    } catch (e) {
      console.log(e);
    }
  }

  async loadData(params = {}) {
    try {
      return  await this.api.users().loadData(params);
    } catch (e) {
      console.log(e);
    }
  }

  async unban(id) {
    try {
      await this.api.users().unban(id);
    } catch (e) {
      console.log(e);
    }
  }

  async ban(id) {
    try {
      await this.api.users().ban(id);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserService();
