import { validateMinLength } from "@/validations/validation";

export type JokeFilterData = {
  category: string;
  searchTerm: string;
  isSafeMode: boolean;
};


export const validateJokeFilterFormData = (formData: FormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  const category = formData.get("category") as string || "Any";
  const searchTerm = formData.get("searchTerm") as string || "";
  
  
  const validCategories = ["Any", "Programming", "Miscellaneous", "Dark", "Pun", "Spooky", "Christmas"];
  if (!validCategories.includes(category)) {
    errors.push("Invalid category selected");
  }
  
  
  if (searchTerm && !validateMinLength(searchTerm, 2)) {
    errors.push("Search term must be at least 2 characters long");
  }
  
  if (searchTerm && searchTerm.length > 50) {
    errors.push("Search term cannot exceed 50 characters");
  }
  
  
  if (searchTerm && /[<>{}[\]\\\/]/.test(searchTerm)) {
    errors.push("Search term cannot contain special characters");
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};


export const extractJokeFilterData = (formData: FormData): JokeFilterData => {
  return {
    category: formData.get("category") as string || "Any",
    searchTerm: formData.get("searchTerm") as string || "",
    isSafeMode: formData.get("safeMode") === "on",
  };
};


export const validateFilterCombination = (filterData: JokeFilterData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  
  if (filterData.isSafeMode && filterData.category === "Dark") {
    errors.push("Safe mode cannot be enabled with Dark category");
  }
  
  
  if (filterData.category === "Any" && filterData.searchTerm.length > 10) {
    
    
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};


export const sanitizeSearchTerm = (searchTerm: string): string => {
  return searchTerm
    .trim()
    .toLowerCase()
    .replace(/[<>{}[\]\\\/]/g, '') 
    .replace(/\s+/g, ' '); 
};
