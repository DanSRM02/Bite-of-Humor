"use client";

import { useTranslation } from "react-i18next";
import Button from "@/components/inputs/button";
import { redirect } from "next/navigation";

function NotFound() {
  const { t } = useTranslation();

  const handleRedirect = () => {
    redirect("..");
  };

  const errorTitle = t("ErrorPage.content.title");
  const errorMessage = t("ErrorPage.content.message");
  const goBackLabel = t("ErrorPage.actions.goBack", "Go Back");

  return (
    <>
      <main aria-label="Error page" tabIndex={0}>
        <div aria-label="Error message container" tabIndex={0}>
          <div aria-hidden="true">⚠️</div>
          <h2 tabIndex={0}>{errorTitle}</h2>
          <p tabIndex={0}>{errorMessage}</p>
          <div>
            <Button
              variant="primary"
              size="medium"
              onClick={handleRedirect}
              aria-label={goBackLabel}
              tabIndex={0}
            >
              {goBackLabel}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
