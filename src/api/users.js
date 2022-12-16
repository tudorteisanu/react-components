import { ApiModel } from "./ApiModel";

export class UsersApi extends ApiModel {
  constructor() {
    super("products");
  }

  async ban(userId) {
    return await this.http.post(`${this.resourceUrl}/${userId}/ban`);
  }

  async unban(userId) {
    return await this.http.post(`${this.resourceUrl}/${userId}/unban`);
  }
}
