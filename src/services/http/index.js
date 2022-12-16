import axios from "axios";
import queryString from "../query-string";

export class Http {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "https://shoply-api.nanoit.dev/api/",
      defaults: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
    // Interceptors.request(this);
    // Interceptors.response(this);
  }

  async get(url, params = {}) {
    try {
      const response = await this.axios.get(url, {
        params,
        paramsSerializer: {
          serialize: (params) => {
            return queryString.stringify(params);
          },
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      throw e.data;
    }
  }

  async delete(url, data = {}) {
    try {
      const response = await this.axios.delete(url, {
        data,
      });
      return response.data;
    } catch (e) {
      throw e.data;
    }
  }

  async patch(url, data) {
    try {
      const response = await this.axios.patch(url, data);
      return response.data;
    } catch (e) {
      throw e.data;
    }
  }

  async post(url, data = {}) {
    try {
      const response = await this.axios.post(url, data);
      return response.data;
    } catch (e) {
      throw e.data;
    }
  }

  async put(url, data) {
    try {
      const response = await this.axios.put(url, data);
      return response.data;
    } catch (e) {
      throw e.data;
    }
  }

  setHeaders(headers) {
    this.axios.defaults.headers = {
      ...this.axios.defaults.headers,
      ...headers,
    };
    return this;
  }

  setParams(params) {
    this.axios.defaults.params = {
      ...this.axios.defaults.params,
      ...params,
    };
    return this;
  }
}
