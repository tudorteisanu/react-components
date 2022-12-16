import { Http } from "../services/http";

export class ApiModel {
  http;
  resourceUrl;

  constructor(resourceUrl) {
    this.http = new Http();
    this.resourceUrl = resourceUrl;
  }

  async loadData(params = {}) {
    return await this.http.get(`${this.resourceUrl}`, params);
  }

  async getForEdit(id) {
    return await this.http.get(`${this.resourceUrl}/${id}`);
  }

  async create(payload = {}) {
    return await this.http.post(`${this.resourceUrl}`, payload);
  }

  async update(id, payload = {}) {
    return await this.http.patch(`${this.resourceUrl}/${id}`, payload);
  }

  async delete(id) {
    return await this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
