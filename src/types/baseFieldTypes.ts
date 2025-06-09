export interface BaseFieldImpl {
  id: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "checkbox"
    | "textarea"
    | "select"
    | "search";
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
