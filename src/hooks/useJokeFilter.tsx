import { useState } from "react";

export default function useJokeFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSafeMode, setSafeMode] = useState(true);
  const [category, setCategory] = useState("Any");

  const isDarkMode = category !== "Dark";
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;
    const value = target.value;
    const type = target.name;
    const checked = (target as HTMLInputElement).checked;

    switch (type) {
      case "searchTerm":
        setSearchTerm(value);
        break;

      case "category":
        setCategory(value);
        if (value === "Dark") {
          setSafeMode((prevState) => !prevState);
        }
        break;

      case "safeMode":
        setSafeMode(checked);
        break;

      default:
        throw Error("That input doesn't exist");
    }
  };
  return {
    isDarkMode,
    isSafeMode,
    searchTerm,
    category,
    handleInputChange,
  };
}
