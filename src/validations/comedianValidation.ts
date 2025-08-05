import { ComedianLoginData, ComedianSignUpData } from "@/types/authTypes";
import {
  validateRequired,
  validateEmail,
  validateMinLength,
  validateMaxLength,
} from "@/validations/validation";

export const validateComedianLoginFormData = (
  formData: FormData
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!validateRequired(email)) {
    errors.push("ComedianLoginForm.validation.email.required");
  } else if (!validateEmail(email)) {
    errors.push("ComedianLoginForm.validation.email.invalid");
  }

  if (!validateRequired(password)) {
    errors.push("ComedianLoginForm.validation.password.required");
  } else if (!validateMinLength(password, 6)) {
    errors.push("ComedianLoginForm.validation.password.minLength");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateComedianSignUpFormData = (
  formData: FormData
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  const joke = formData.get("joke") as string;

  if (!validateRequired(name)) {
    errors.push("ComedianSignUpForm.validation.name.required");
  } else {
    if (!validateMinLength(name, 2)) {
      errors.push("ComedianSignUpForm.validation.name.minLength");
    }
    if (!validateMaxLength(name, 50)) {
      errors.push("ComedianSignUpForm.validation.name.maxLength");
    }
  }

  if (!validateRequired(email)) {
    errors.push("ComedianSignUpForm.validation.email.required");
  } else if (!validateEmail(email)) {
    errors.push("ComedianSignUpForm.validation.email.invalid");
  }

  if (!validateRequired(password)) {
    errors.push("ComedianSignUpForm.validation.password.required");
  } else if (!validateMinLength(password, 6)) {
    errors.push("ComedianSignUpForm.validation.password.minLength");
  }

  if (!validateRequired(joke)) {
    errors.push("ComedianSignUpForm.validation.joke.required");
  } else {
    if (!validateMinLength(joke, 10)) {
      errors.push("ComedianSignUpForm.validation.joke.minLength");
    }
    if (!validateMaxLength(joke, 300)) {
      errors.push("ComedianSignUpForm.validation.joke.maxLength");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const extractComedianLoginData = (
  formData: FormData
): ComedianLoginData => {
  return {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
};

export const extractComedianSignUpData = (
  formData: FormData
): ComedianSignUpData => {
  return {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
    joke: formData.get("joke") as string,
  };
};
