"use server";

import { FormStateAction } from "@/types/formTypes";
import { 
  validateJokeFilterFormData,
  extractJokeFilterData
} from "@/validations/filterJokesValidation";

export type JokeFilterFormData = {
  category: string;
  searchTerm: string;
  isSafeMode: boolean;
};

export async function filterJokesAction(
  prevState: FormStateAction,
  formData: FormData
): Promise<FormStateAction> {
  try {
    
    const validation = validateJokeFilterFormData(formData);
    
    if (!validation.isValid) {
      return {
        errors: validation.errors,
        message: "Please fix the following errors:"
      };
    }
    
    
    const filterData = extractJokeFilterData(formData);
    
    
    
    
    
    
    return {
      errors: [],
      message: `Filters applied: ${filterData.category} category${filterData.searchTerm ? `, searching for "${filterData.searchTerm}"` : ""}${filterData.isSafeMode ? ", safe mode enabled" : ""}`
    };
  } catch (error) {
    console.error("Filter error:", error);
    return {
      errors: ["Failed to apply filters"],
      message: "An error occurred while applying filters"
    };
  }
}
