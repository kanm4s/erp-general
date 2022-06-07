import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = ({
  onSubmit,
  defaultValues = {},
  children,
  schema,
  style,
}) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        style={style}
      >
        {children}
      </form>
    </FormProvider>
  );
};
