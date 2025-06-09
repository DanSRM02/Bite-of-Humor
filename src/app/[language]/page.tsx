"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { redirect } from "next/navigation";
import { LanguageContext } from "@/context/languageContext";
import { modifyPositionElement } from "@/utils/modifyPositionElement";
import Button from "@/components/inputs/button";

function TheStartSetupPage() {
  const refButton = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();
  const { localizationRouter } = useContext(LanguageContext);
  const [message, setMessage] = useState("");
  const [timesClicked, setTimesClicked] = useState(2);

  const translations = {
    intro: {
      title: t("FirstSetup.introduction.title"),
      remark: t("FirstSetup.introduction.remark"),
      paragraph1: t("FirstSetup.introduction.paragraph1"),
      paragraph2: t("FirstSetup.introduction.paragraph2"),
      paragraph3: t("FirstSetup.introduction.paragraph3"),
    },
    actions: {
      buttonMessage: message || t("FirstSetup.actions.buttonMessages.message1"),
    },
  };

  useEffect(() => {
    setMessage(t("FirstSetup.actions.buttonMessages.message1"));
  }, [t]);

  function handleClick() {
    setTimesClicked((prev) => prev + 1);
    const buttonUtil = modifyPositionElement(refButton.current);
    const shouldRedirectToNextStep = timesClicked === 6;
    const shouldChangePosition = timesClicked <= 4;
    const shouldDefaultPosition = timesClicked === 5;

    if (shouldChangePosition) {
      buttonUtil.changePosition({ maxOffsetX: 25, maxOffsetY: 25 });
    }

    if (shouldDefaultPosition) {
      buttonUtil.defaultPosition();
    }

    if (shouldRedirectToNextStep) {
      console.log("reduitre");
      
      redirect(`/${localizationRouter}/setup/medium`);
    }

    const messageTranslated = t(
      `FirstSetup.actions.buttonMessages.message${timesClicked}`
    );

    setMessage(messageTranslated);
  }

  return (
    <main tabIndex={0} aria-label="First setup main content">
      <h1 tabIndex={0} aria-label="Bite Of Humor heading">
        Bite Of Humor
      </h1>
      <section tabIndex={0} aria-label="Setup question and interaction">
        <article tabIndex={0} aria-label="Setup introduction and description">
          <h2 tabIndex={0} aria-label={translations.intro.title}>
            {translations.intro.title}
          </h2>
          <h5 tabIndex={0} aria-label={translations.intro.remark}>
            {translations.intro.remark}
          </h5>
          <p>
            <Trans i18nKey="FirstSetup.introduction.paragraph1">
              {translations.intro.paragraph1}
            </Trans>
          </p>
          <p>
            <Trans i18nKey="FirstSetup.introduction.paragraph2">
              {translations.intro.paragraph2}
            </Trans>
          </p>
          <p>
            <Trans i18nKey="FirstSetup.introduction.paragraph3">
              {translations.intro.paragraph3}
            </Trans>
          </p>
        </article>
        <article>
          <Button
            size="medium"
            variant="primary"
            refButton={refButton}
            onClick={handleClick}
            tabIndex={0}
          >
            {message}
          </Button>
        </article>
      </section>
    </main>
  );
}

export default TheStartSetupPage;
