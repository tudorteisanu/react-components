import FormInput from "../components/common/form/FormInput";
import { useForm } from "react-hook-form";
import BaseForm from "../components/common/form/BaseForm";
import rules from "../utils/validation-rules";
import FormSelect from "../components/common/form/FormSelect";
import FormCheckbox from "../components/common/form/FormCheckbox";
import { ROLES } from "../data";
import { Button, Typography } from "@mui/material";

const Home = () => {
  const form = useForm({
    defaultValues: {
      roleId: 2,
    },
    mode: "all",
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
