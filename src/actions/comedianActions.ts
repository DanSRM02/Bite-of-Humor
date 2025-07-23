"use server";

import { FormStateAction } from "@/types/formTypes";
import {
  validateComedianLoginFormData,
  validateComedianSignUpFormData,
  extractComedianLoginData,
  extractComedianSignUpData,
} from "@/validations/comedianValidation";
import { redirect } from "next/navigation";

export async function loginComedianAction(
  prevState: FormStateAction,
  formData: FormData
): Promise<FormStateAction> {
  try {
    const validation = validateComedianLoginFormData(formData);

    if (!validation.isValid) {
      return {
        errors: validation.errors,
        message: "Please fix the following errors:",
      };
    }

    const loginData = extractComedianLoginData(formData);
  } catch (error) {
    console.error("Login error:", error);
    return {
      errors: ["Login failed"],
      message: "An error occurred during login",
    };
  }
  redirect("/joke/setup/select-country");
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
        message: "Please fix the following errors:",
      };
    }

    const signUpData = extractComedianSignUpData(formData);
  } catch (error) {
    console.error("SignUp error:", error);
    return {
      errors: ["Registration failed"],
      message: "An error occurred during registration",
    };
  }
  redirect("/joke/setup/select-country");
}
