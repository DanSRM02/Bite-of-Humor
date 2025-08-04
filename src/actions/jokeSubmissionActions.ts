"use server";

import { FormStateAction } from "@/types/formTypes";
import { 
  validateJokeSubmissionFormData, 
  extractJokeSubmissionData
} from "@/validations/jokeSubmissionValidation";
import { getTranslations, getLocale } from "next-intl/server";

export async function submitJokeAction(
  prevState: FormStateAction,
  formData: FormData
): Promise<FormStateAction> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });
  
  try {
    const validation = validateJokeSubmissionFormData(formData);
    
    if (!validation.isValid) {
      const translatedErrors = validation.errors.map(errorKey => t(errorKey));
      
      return {
        errors: translatedErrors,
        message: t("jokeSubmission.errors.fixErrors")
      };
    }
    
    const jokeData = extractJokeSubmissionData(formData);

    return {
      errors: [],
      message: t("jokeSubmission.success.submitted")
    };
  } catch (error) {
    console.error("Joke submission error:", error);
    return {
      errors: [t("jokeSubmission.errors.submissionFailed")],
      message: t("jokeSubmission.errors.generalError")
    };
  }
}
