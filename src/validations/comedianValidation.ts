import { validateRequired, validateEmail, validateMinLength, validateMaxLength } from "@/validations/validation";

export type ComedianLoginData = {
  email: string;
  name: string;
};

export type ComedianSignUpData = {
  email: string;
  name: string;
  joke: string;
};

export const validateComedianLoginFormData = (formData: FormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  
  if (!validateRequired(email)) {
    errors.push("Email is required");
  } else if (!validateEmail(email)) {
    errors.push("Please enter a valid email address");
  }
  
  if (!validateRequired(name)) {
    errors.push("Name is required");
  } else {
    if (!validateMinLength(name, 2)) {
      errors.push("Name must be at least 2 characters long");
    }
    if (!validateMaxLength(name, 50)) {
      errors.push("Name cannot exceed 50 characters");
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateComedianSignUpFormData = (formData: FormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const joke = formData.get("joke") as string;
  
  if (!validateRequired(email)) {
    errors.push("Email is required");
  } else if (!validateEmail(email)) {
    errors.push("Please enter a valid email address");
  }
  
  if (!validateRequired(name)) {
    errors.push("Name is required");
  } else {
    if (!validateMinLength(name, 2)) {
      errors.push("Name must be at least 2 characters long");
    }
    if (!validateMaxLength(name, 50)) {
      errors.push("Name cannot exceed 50 characters");
    }
  }
  
  if (!validateRequired(joke)) {
    errors.push("A sample joke is required for registration");
  } else {
    if (!validateMinLength(joke, 10)) {
      errors.push("Joke must be at least 10 characters long");
    }
    if (!validateMaxLength(joke, 300)) {
      errors.push("Joke cannot exceed 300 characters");
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};


export const extractComedianLoginData = (formData: FormData): ComedianLoginData => {
  return {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
  };
};

export const extractComedianSignUpData = (formData: FormData): ComedianSignUpData => {
  return {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    joke: formData.get("joke") as string,
  };
};
