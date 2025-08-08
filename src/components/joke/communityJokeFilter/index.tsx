"use client";

import FormRendered from "@/components/dataDisplay/FormRendered";
import { FieldBlueprintType, FormFieldProps } from "@/types/baseFieldTypes";
import { useCommunityJokeFilter } from "@/contexts/CommunityJokeFilterContext";

const CommunityJokeFilter = () => {  
  const { filters, updateFilter } = useCommunityJokeFilter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFilter({ [name]: value });
  };

  const filterFields: FieldBlueprintType[] = [
    {
      type: "select",
      label: "CommunityPage.filters.category.label",
      placeholder: "CommunityPage.filters.category.placeholder",
      id: "category",
      nameInput: "category",
      options: [
        { value: "Any", label: "Any", isTextRaw: true, nameInput: "category" },
        { value: "Programming", label: "common.categories.Programming", isTextRaw: false, nameInput: "category" },
        { value: "Miscellaneous", label: "common.categories.Miscellaneous", isTextRaw: false, nameInput: "category" },
        { value: "Dark", label: "common.categories.Dark", isTextRaw: false, nameInput: "category" },
        { value: "Pun", label: "common.categories.Pun", isTextRaw: false, nameInput: "category" },
        { value: "Spooky", label: "common.categories.Spooky", isTextRaw: false, nameInput: "category" },
        { value: "Christmas", label: "common.categories.Christmas", isTextRaw: false, nameInput: "category" },
      ]
    },
    {
      type: "text",
      label: "CommunityPage.filters.search.label",
      placeholder: "CommunityPage.filters.search.placeholder",
      id: "searchTerm",
      nameInput: "searchTerm"
    },
    {
      type: "select",
      label: "CommunityPage.filters.sortBy.label",
      placeholder: "CommunityPage.filters.sortBy.placeholder",
      id: "sortBy",
      nameInput: "sortBy",
      options: [
        { value: "newest", label: "CommunityPage.filters.sortBy.newest", isTextRaw: false, nameInput: "sortBy" },
        { value: "oldest", label: "CommunityPage.filters.sortBy.oldest", isTextRaw: false, nameInput: "sortBy" },
        { value: "popular", label: "CommunityPage.filters.sortBy.popular", isTextRaw: false, nameInput: "sortBy" },
      ]
    }
  ];

  const fieldsWithDynamicAttributes: FormFieldProps[] = filterFields.map((field) => ({
    ...field,
    value: filters[field.id as keyof typeof filters]
  }));

  return (
    <div className="space-y-4">
      <FormRendered
        inputFields={fieldsWithDynamicAttributes}
        handlerChange={handleInputChange}
        variant="filter"
      />
    </div>
  );
};

export default CommunityJokeFilter;
