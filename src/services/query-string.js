import qs from "qs";

class QueryStringService {
  stringify(params) {
    try {
      return qs.stringify(params, {
        arrayFormat: "comma",
        allowDots: true,
      });
    } catch (e) {
      return {};
    }
  }

  parse(query) {
    try {
      return qs.parse(query, {
        comma: true,
        allowDots: true,
      });
    } catch (e) {
      return {};
    }
  }
}

export default new QueryStringService();
