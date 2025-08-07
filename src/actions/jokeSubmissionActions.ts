"use server";

import { insertJoke } from "@/services/jokeService";
import { FormStateAction } from "@/types/formTypes";
import {
  validateJokeSubmissionFormData,
  extractJokeSubmissionData,
} from "@/validations/jokeSubmissionValidation";
import { getTranslations, getLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function submitJokeAction(
  prevState: FormStateAction,
  formData: FormData
): Promise<FormStateAction> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  try {
    const validation = validateJokeSubmissionFormData(formData);

    if (!validation.isValid) {
      const translatedErrors = validation.errors.map((errorKey) => t(errorKey));

      return {
        errors: translatedErrors,
        message: t("jokeSubmission.errors.fixErrors"),
      };
    }

    const jokeData = extractJokeSubmissionData(formData);

    const response = await insertJoke(jokeData);

    if (!response) {
      return {
        errors: [t("jokeSubmission.errors.generalError")],
        message: t("jokeSubmission.errors.submissionFailed"),
      };
    }
    
    
  } catch (error: any) {
    return {
      errors: [t("jokeSubmission.errors.submissionFailed")],
      message: t("jokeSubmission.errors.generalError"),
    };
  }

  revalidatePath("/", "layout");
  redirect(`/${locale}/joke/setup/final`);
}
