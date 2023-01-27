import FormInput from "../components/base/form/FormInput";
import { useForm } from "react-hook-form";
import BaseForm from "../components/base/form/BaseForm";
import rules from "../utils/validation-rules";
import FormSelect from "../components/base/form/FormSelect";
import FormCheckbox from "../components/base/form/FormCheckbox";
import { ROLES } from "../data";
import { Button, Typography } from "@mui/material";
import BaseDatePicker from "../components/base/form/BaseDatePicker";

const Home = () => {
  const form = useForm({
    mode: "all",
    defaultValues: {
      date: "2023-01-01",
    },
  });
  const onSubmit = (data) => console.log(data);
  const setErrors = (event) => {
    event.preventDefault();
    const { setError } = form;
    setError("name", { type: "custom", message: "Backend error" });
    setError("roleId", { type: "custom", message: "Backend error" });
    setError("agreements", { type: "custom", message: "Backend error" });
  };
  return (
    <>
      <BaseForm form={form} onSubmit={onSubmit}>
        <Typography variant={"h5"}>Form</Typography>
        <FormInput
          label={"Name"}
          name={"name"}
          rules={[rules.required, rules.minLength(2)]}
        />
        <FormSelect
          items={ROLES}
          label={"Role"}
          name={"roleId"}
          rules={[rules.required]}
        />
        <FormCheckbox
          label={"Role"}
          name={"agreements"}
          rules={[rules.required]}
        />
        <BaseDatePicker inputFormat={'DD.MM.YYYY'} label={"Date"} name={"date"} />

        <Button variant="outlined" type={"submit"}>
          Submit
        </Button>
        <Button
          style={{ marginLeft: 5 }}
          variant={"outlined"}
          color="error"
          onClick={setErrors}
        >
          Set errors
        </Button>
      </BaseForm>
    </>
  );
};

export default Home;
