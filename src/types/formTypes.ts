export type FormStateAction = {
  errors: string[];
  message: string;
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ValidationRule<T = string> {
  validate: (value: T) => boolean;
  message: string;
}
