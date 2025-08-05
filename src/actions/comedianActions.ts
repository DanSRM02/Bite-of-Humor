"use server";

import { FormStateAction } from "@/types/formTypes";
import {
  validateComedianSignUpFormData,
  extractComedianSignUpData,
  validateComedianLoginFormData,
  extractComedianLoginData,
} from "@/validations/comedianValidation";
import { comedianSignUp, comedianSignIn } from "@/services/authService";
import { getTranslations, getLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function signUpComedianAction(
  prevState: FormStateAction,
  formData: FormData
) {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  try {
    const validation = validateComedianSignUpFormData(formData);

    if (!validation.isValid) {
      const translatedErrors = validation.errors.map((errorKey) => t(errorKey));

      return {
        errors: translatedErrors,
        message: t("ComedianSignUpForm.errors.validationFailed"),
      };
    }

    const signUpData = extractComedianSignUpData(formData);

    await comedianSignUp(signUpData);

    
  } catch (error: any) {
    return {
      errors: [error.message || t("ComedianSignUpForm.errors.general")],
      message: t("ComedianSignUpForm.errors.registrationFailed"),
    };
  }
  
  revalidatePath("/", "layout");
  redirect("/joke/setup/final");
}

export async function signInComedianAction(
  prevState: FormStateAction,
  formData: FormData
) {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  try {
    const validation = validateComedianLoginFormData(formData);

    if (!validation.isValid) {
      const translatedErrors = validation.errors.map((errorKey) => t(errorKey));

      return {
        errors: translatedErrors,
        message: t("ComedianLoginForm.errors.validationFailed"),
      };
    }

    const signInData = extractComedianLoginData(formData);

    const user = await comedianSignIn(signInData);
    
    if (!user) {
      return {
        errors: [t("ComedianLoginForm.errors.invalidCredentials")],
        message: t("ComedianLoginForm.errors.loginFailed"),
      };
    }
    
  } catch (error: any) {
    return {
      errors: [error.message || t("ComedianLoginForm.errors.general")],
      message: t("ComedianLoginForm.errors.loginFailed"),
    };
  }
  
  revalidatePath("/", "layout");
  redirect("/joke/setup/final");
}
