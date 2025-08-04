import { validateRequired, validateMaxLength } from "@/validations/validation";

export type JokeSubmissionData = {
  category: string;
  setup: string;
  punchline: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    sexist: boolean;
    explicit: boolean;
    racist: boolean;
  };
};

export const validateJokeSubmissionFormData = (formData: FormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  const category = formData.get("category") as string;
  const setup = formData.get("setup") as string;
  const punchline = formData.get("punchline") as string;
  
  // Validación de categoría
  const validCategories = ["Programming", "Miscellaneous", "Dark", "Pun", "Spooky", "Christmas"];
  if (!validateRequired(category)) {
    errors.push("validation.category.required");
  } else if (!validCategories.includes(category)) {
    errors.push("validation.category.invalid");
  }
  
  // Validación de setup - mínimo 3 palabras
  if (!validateRequired(setup)) {
    errors.push("validation.setup.required");
  } else {
    const setupWords = setup.trim().split(/\s+/).filter(word => word.length > 0);
    if (setupWords.length < 3) {
      errors.push("validation.setup.minWords");
    }
    if (!validateMaxLength(setup, 200)) {
      errors.push("validation.setup.maxLength");
    }
  }
  
  // Validación de punchline - mínimo 1 palabra
  if (!validateRequired(punchline)) {
    errors.push("validation.punchline.required");
  } else {
    const punchlineWords = punchline.trim().split(/\s+/).filter(word => word.length > 0);
    if (punchlineWords.length < 1) {
      errors.push("validation.punchline.minWords");
    }
    if (!validateMaxLength(punchline, 150)) {
      errors.push("validation.punchline.maxLength");
    }
  }
  
  // Validación especial para categoría Dark - debe tener flag explicit
  const flags = {
    nsfw: formData.get("nsfw") === "on",
    religious: formData.get("religious") === "on",
    political: formData.get("political") === "on",
    sexist: formData.get("sexist") === "on",
    explicit: formData.get("explicit") === "on",
    racist: formData.get("racist") === "on",
  };
  
  if (category === "Dark" && !flags.explicit) {
    errors.push("validation.darkCategory.explicitRequired");
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const extractJokeSubmissionData = (formData: FormData): JokeSubmissionData => {
  return {
    category: formData.get("category") as string,
    setup: formData.get("setup") as string,
    punchline: formData.get("punchline") as string,
    flags: {
      nsfw: formData.get("nsfw") === "on",
      religious: formData.get("religious") === "on",
      political: formData.get("political") === "on",
      sexist: formData.get("sexist") === "on",
      explicit: formData.get("explicit") === "on",
      racist: formData.get("racist") === "on",
    }
  };
};
