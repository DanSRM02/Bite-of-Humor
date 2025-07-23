"use server";

import { FormStateAction } from "@/types/formTypes";
import { validateRequired, validateMinLength, validateMaxLength } from "@/validations/validation";

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

const validateJokeSubmissionFormData = (formData: FormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  const category = formData.get("category") as string;
  const setup = formData.get("setup") as string;
  const punchline = formData.get("punchline") as string;
  
  const validCategories = ["Programming", "Miscellaneous", "Dark", "Pun", "Spooky", "Christmas"];
  if (!validateRequired(category)) {
    errors.push("Category is required");
  } else if (!validCategories.includes(category)) {
    errors.push("Invalid category selected");
  }
  
  if (!validateRequired(setup)) {
    errors.push("Joke setup is required");
  } else {
    if (!validateMinLength(setup, 10)) {
      errors.push("Joke setup must be at least 10 characters long");
    }
    if (!validateMaxLength(setup, 200)) {
      errors.push("Joke setup cannot exceed 200 characters");
    }
  }
  
  if (!validateRequired(punchline)) {
    errors.push("Punchline is required");
  } else {
    if (!validateMinLength(punchline, 5)) {
      errors.push("Punchline must be at least 5 characters long");
    }
    if (!validateMaxLength(punchline, 150)) {
      errors.push("Punchline cannot exceed 150 characters");
    }
  }
  
  const flags = {
    nsfw: formData.get("nsfw") === "on",
    religious: formData.get("religious") === "on",
    political: formData.get("political") === "on",
    sexist: formData.get("sexist") === "on",
    explicit: formData.get("explicit") === "on",
    racist: formData.get("racist") === "on",
  };
  
  const offensiveFlags = ['nsfw', 'religious', 'political', 'sexist', 'explicit', 'racist'];
  const offensiveCount = offensiveFlags.filter(flag => flags[flag as keyof typeof flags]).length;
  
  if (offensiveCount > 3) {
    errors.push("Joke cannot have more than 3 offensive flags");
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export async function submitJokeAction(
  prevState: FormStateAction,
  formData: FormData
): Promise<FormStateAction> {
  try {
    const validation = validateJokeSubmissionFormData(formData);
    
    if (!validation.isValid) {
      return {
        errors: validation.errors,
        message: "Please fix the following errors:"
      };
    }
    
    const jokeData: JokeSubmissionData = {
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

    return {
      errors: [],
      message: "Your joke has been submitted successfully and is pending review!"
    };
  } catch (error) {
    return {
      errors: ["Submission failed"],
      message: "An error occurred while submitting your joke"
    };
  }
}
