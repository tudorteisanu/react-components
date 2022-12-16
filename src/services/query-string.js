import qs from "qs";

const serializeParams = (params) => {
  try {
    return qs.stringify(params, {
      arrayFormat: "comma",
      allowDots: true,
    });
  } catch (e) {
    return {};
  }
};

const parseQuery = (query) => {
  try {
    return qs.parse(query, {
      comma: true,
      allowDots: true,
    });
  } catch (e) {
    return {};
  }
};

export { serializeParams, parseQuery };
