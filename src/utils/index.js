export const getParsedRules = (rules) => {
  return rules?.reduce((acc, item) => {
    if (typeof item.rule === "function") {
      acc[item.name] = item.rule();
    } else {
      acc[item.name] = item.rule;
    }
    return acc;
  }, {});
};

export * as rules from "./validation-rules";
