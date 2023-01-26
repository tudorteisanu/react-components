import { FormProvider } from "react-hook-form";

const BaseForm = ({ form, onSubmit, children }) => {
  const { handleSubmit } = form;
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} style={{padding: '50px'}}>
        {children}
      </form>
    </FormProvider>
  );
};

export default BaseForm;
