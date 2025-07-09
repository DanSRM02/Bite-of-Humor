import { useState } from "react";

function useInteractiveForm<T extends Record<string, any>>(initialState: T) {
  const [formState, setFormState] = useState<T>(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const valueCheckbox = (e.target as HTMLInputElement).checked;

    const valueToSet = type === "checkbox" ? valueCheckbox : value;

    if (name in formState.flags) {
      setFormState((prevState) => ({
        ...prevState,
        flags: {
          ...prevState.flags,
          [name]: valueCheckbox,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: valueToSet,
      }));
    }
  };

  return { handleInputChange, formState };
}

export default useInteractiveForm;
