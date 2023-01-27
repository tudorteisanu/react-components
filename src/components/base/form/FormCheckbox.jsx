import { Checkbox, FormControlLabel } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { getParsedRules } from "../../../utils";
import ErrorMessage from "./ErrorMessage";

const FormCheckbox = ({
  label = "",
  rules = [],
  name = "",
  variant = "outlined",
}) => {
  const { control } = useFormContext();
  const parsedRules = getParsedRules(rules);
  return (
    <Controller
      name={name}
      control={control}
      rules={parsedRules}
      defaultValue={""}
      render={({ field, fieldState: { error } }) => (
        <div style={{ marginTop: "10px" }}>
          <FormControlLabel
            control={<Checkbox {...field} label={label} variant={variant} />}
            label={label}
          />
          <ErrorMessage error={error} />
        </div>
      )}
    />
  );
};

export default FormCheckbox;
