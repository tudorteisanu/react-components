import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { getParsedRules } from "../../../utils";
import ErrorMessage from "./ErrorMessage";

const FormSelect = ({
  label = "",
  rules = [],
  items = [],
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
          <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select label={label} {...field} variant={variant}>
              {items.map(({ value, text }, index) => {
                return (
                  <MenuItem key={index} value={value}>
                    {text}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <ErrorMessage error={error} />
        </div>
      )}
    />
  );
};

export default FormSelect;
