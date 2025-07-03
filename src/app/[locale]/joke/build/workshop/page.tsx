"use client";
import Form from "@/components/inputs/form";
import { inputTypes } from "@/types/baseFieldTypes";

function WorkshopPage() {
  const inputFields = [
    {
      type: "text" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "setup",
    },
    {
      type: "text" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "setup",
    },
    {
      type: "text" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "setup",
    },
    {
      type: "text" as inputTypes,
      label: "common.none",
      placeholder: "common.all",
      id: "setup",
    },
  ];
  const handleClickAddJoke = () => {};
  return (
    <>
      <h1>WorkShop</h1>
      <Form
        inputFields={inputFields}
        actionForm=""
        onClickButton={handleClickAddJoke}
        textButton="none"
        legendHeading="common.none"
      />
    </>
  );
}

export default WorkshopPage;
