const ValidationRulesConfig = () => {
  return {
    required: {
      name: "required",
      rule: {
        value: true,
        message: "Required field",
      },
    },
    email: {
      name: "pattern",
      rule: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "validation.email",
      },
    },
    minLength: (value) => {
      return {
        name: "minLength",
        rule: {
          value,
          message: `Should have more then ${value} symbols `,
        },
      };
    },
    maxLength: (value) => {
      return {
        name: "maxLength",
        rule: {
          value,
          message: `Should have less then ${value} symbols `,
        },
      };
    },
    min: (value) => {
      return {
        name: "min",
        rule: {
          value,
          message: `Should be more then ${value}`,
        },
      };
    },
    max: (value) => {
      return {
        name: "max",
        rule: {
          value,
          message: `Should be less then ${value}`,
        },
      };
    },
  };
};

const rules = ValidationRulesConfig();
export default rules;
