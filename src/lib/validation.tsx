import { RegisterOptions } from 'react-hook-form';

const patterns = {
  email: /\S+@\S+\.\S+/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
};

const errorMessages = {
  fieldRequired: 'Field is required',
  invalidEmail: 'Invalid email',
  invalidPassword: `6-20 characters, at least one numeric digit, one uppercase and one lowercase letter`,
};

const defaultValidationRules: RegisterOptions = {
  required: errorMessages.fieldRequired,
};

const emailValidationRules: RegisterOptions = {
  pattern: {
    value: patterns.email,
    message: errorMessages.invalidEmail,
  },
};

const newPasswordValidation: RegisterOptions = {
  pattern: {
    value: patterns.password,
    message: errorMessages.invalidPassword,
  },
};

export { defaultValidationRules, emailValidationRules, newPasswordValidation };
