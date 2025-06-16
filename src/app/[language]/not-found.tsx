"use client";

import { useTranslation } from "react-i18next";
import Button from "@/components/inputs/Button";
import { redirect } from "next/navigation";

function NotFound() {
  const { t } = useTranslation();

  const handleRedirect = () => {
    redirect("..");
  };

  const errorTitle = t("ErrorPage.content.title");
  const errorMessage = t("ErrorPage.content.message");
  const goBackLabel = t("ErrorPage.actions.button");

  return (
    <>
      <main
        aria-label="Error page"
        className="flex flex-col items-center justify-center min-h-screen p-8 bg-third-bg"
      >
        <div
          aria-label="Error message container"
          className="flex flex-col items-center justify-center border border-solid border-gray-300 max-w-[50rem] w-full p-12 text-center rounded-md"
        >
          <div aria-hidden="true" className="text-4xl mb-6">
            ⚠️
          </div>
          <h2 className="text-2xl font-bold text-secondary-bg mb-4 leading-tight">
            {errorTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-[40rem]">
            {errorMessage}
          </p>
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            <Button variant="primary" size="medium" onClick={handleRedirect}>
              {goBackLabel}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
