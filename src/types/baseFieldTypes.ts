export interface BaseFieldImpl {
  id: string;
  type?: inputTypes;
  placeholder?: string;
  value?: string | string[];
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  error?: boolean;
}

export type inputTypes =
  | "text"
  | "password"
  | "email"
  | "checkbox"
  | "textarea"
  | "select"
  | "search";
