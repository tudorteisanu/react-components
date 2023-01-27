import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { getParsedRules } from "../../../utils";
import ErrorMessage from "./ErrorMessage";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DDThh:mm:ss.sss";
const DEFAULT_INPUT_FORMAT = "YYYY-MM-DD";

const BaseDatePicker = ({
  label = "",
  rules = [],
  name = "",
  format = DEFAULT_DATE_FORMAT,
  inputFormat = DEFAULT_INPUT_FORMAT,
  variant = "outlined",
}) => {
  const { control } = useFormContext();
  const parsedRules = getParsedRules(rules);
  const setFormattedDate = (newDate, field) => {
    if (newDate && newDate.isValid()) {
      field.onChange(newDate.format(format));
      return;
    }

    field.onChange(newDate);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={parsedRules}
      defaultValue={""}
      render={({ field, fieldState: { error } }) => (
        <div style={{ marginTop: "10px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat={inputFormat}
              label={label}
              {...field}
              onChange={(newDate) => setFormattedDate(newDate, field)}
              renderInput={(params) => {
                return <TextField {...params} variant={variant} />;
              }}
            />
          </LocalizationProvider>
          <ErrorMessage error={error} />
        </div>
      )}
    />
  );
};

export default BaseDatePicker;
