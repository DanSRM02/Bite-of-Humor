"use server";

import { FormStateAction } from "@/types/formTypes";
import {
  validateJokeSubmissionFormData,
  extractJokeSubmissionData,
} from "@/validations/jokeSubmissionValidation";
import { getTranslations, getLocale } from "next-intl/server";

export async function submitJokeAction(
  prevState: FormStateAction,
  formData: FormData
) {
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
  } catch (error) {    
    return {
      errors: [t("jokeSubmission.errors.submissionFailed")],
      message: t("jokeSubmission.errors.generalError"),
    };
  }
}
