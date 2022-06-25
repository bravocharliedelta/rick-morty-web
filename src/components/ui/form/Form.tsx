import {
  useForm,
  RegisterOptions,
  FormProvider,
  useFormContext,
  SubmitHandler,
  Path,
  UseFormProps,
} from 'react-hook-form';
import { defaultValidationRules } from '../../../lib/validation';
import { FormContainer, Input, Label, ErrorMessage } from './FormStyles';

type FormProps<TFormValues> = {
  children: React.ReactElement | React.ReactElement[];
  onSubmit: SubmitHandler<TFormValues>;
  formProps?: UseFormProps<TFormValues>;
};

function Form<TFormValues>({ children, onSubmit, formProps }: FormProps<TFormValues>) {
  const methods = useForm<TFormValues>(formProps);

  return (
    <FormContainer onSubmit={methods.handleSubmit(onSubmit)} noValidate>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormProvider {...methods}>{children}</FormProvider>
    </FormContainer>
  );
}

type TextFieldProps<TFormValues> = {
  id: Path<TFormValues>;
  type?: string;
  children: string;
  rules?: RegisterOptions;
};

function TextField<TFormValues>({
  children,
  id,
  type = 'text',
  rules,
}: TextFieldProps<TFormValues>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const updatedRules = { ...defaultValidationRules, ...rules };
  const errorMessage = (errors[id]?.message as string) || '';

  return (
    <>
      {/* TODO: add visually hidden option for labels */}
      <Label htmlFor={id}>{children}</Label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input id={id} type={type} {...register(id, updatedRules)} />
      {errorMessage && <ErrorMessage role="alert">{errorMessage}</ErrorMessage>}
    </>
  );
}

Form.TextField = TextField;

export default Form;
