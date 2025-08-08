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

    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : t("ComedianSignUpForm.errors.general");
    return {
      errors: [errorMessage],
      message: t("ComedianSignUpForm.errors.registrationFailed"),
    };
  }
  
  revalidatePath("/", "layout");
  redirect(`/${locale}/joke/setup/final`);
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
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : t("ComedianLoginForm.errors.general");
    return {
      errors: [errorMessage],
      message: t("ComedianLoginForm.errors.loginFailed"),
    };
  }
  
  revalidatePath("/", "layout");
  redirect(`/${locale}/joke/setup/final`);
}
