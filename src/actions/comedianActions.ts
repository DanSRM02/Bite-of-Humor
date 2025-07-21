"use server";

import { FormStateAction } from "@/types/formTypes";
import { 
  validateComedianLoginFormData, 
  validateComedianSignUpFormData,
  extractComedianLoginData,
  extractComedianSignUpData 
} from "@/validations/comedianValidation";

export async function loginComedianAction(
  prevState: FormStateAction,
  formData: FormData
): Promise<FormStateAction> {
  try {
    const validation = validateComedianLoginFormData(formData);
    
    if (!validation.isValid) {
      return {
        errors: validation.errors,
        message: "Please fix the following errors:"
      };
    }
    
    const loginData = extractComedianLoginData(formData);
        
    
    return {
      errors: [],
      message: `Welcome back, ${loginData.name}! Login successful.`
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      errors: ["Login failed"],
      message: "An error occurred during login"
    };
  }
}

export async function signUpComedianAction(
  prevState: FormStateAction,
  formData: FormData
): Promise<FormStateAction> {
  try {
    const validation = validateComedianSignUpFormData(formData);
    
    if (!validation.isValid) {
      return {
        errors: validation.errors,
        message: "Please fix the following errors:"
      };
    }
    
    const signUpData = extractComedianSignUpData(formData);
    
    return {
      errors: [],
      message: `Welcome, ${signUpData.name}! Your account has been created successfully.`
    };
  } catch (error) {
    console.error("SignUp error:", error);
    return {
      errors: ["Registration failed"],
      message: "An error occurred during registration"
    };
  }
}
