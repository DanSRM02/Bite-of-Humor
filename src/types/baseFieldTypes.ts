import { ChangeEvent } from "react";

export interface BaseFieldImpl {
  id: string;
  isTextRaw?: boolean;
  type?: inputTypes;
  placeholder?: string;
  value?: string | string[];
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  error?: boolean;
}

export type FieldBlueprintType = {
  id: string;
  name?: string;
  type: inputTypes;
  isTextRaw?: boolean;
  label: string;
  placeholder?: string;
  options?: SelectOption[];
  multipleOptions?: {
    groupLabel: string;
    options: SelectOption[];
  }[];
};

export type FieldState = {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
};

export type FormFieldProps = FieldBlueprintType & FieldState;

export type SelectOption = {
  isTextRaw: boolean;
  label: string;
  value: string;
  checked?: boolean;
};

export type inputTypes =
  | "text"
  | "password"
  | "email"
  | "checkbox"
  | "textarea"
  | "select"
  | "search"
  | "selectMultiple";
