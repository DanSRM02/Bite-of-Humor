"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { redirect } from "next/navigation";
import { LanguageContext } from "@/context/languageContext";
import { modifyPositionElement } from "@/utils/modifyPositionElement";
import Button from "@/components/inputs/Button";

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
      redirect(`/${localizationRouter}/setup/medium`);
    }

    const messageTranslated = t(
      `FirstSetup.actions.buttonMessages.message${timesClicked}`
    );

    setMessage(messageTranslated);
  }

  return (
    <main   className="min-h-screen flex flex-col items-center justify-center" aria-label="First setup main content">
      <h1   className="mb-2 font-bold" aria-label="Bite Of Humor heading">
        Bite Of Humor
      </h1>
      <section   className="flex flex-wrap justify-center gap-[6rem] mt-12"  aria-label="Setup question and interaction">
        <article   className="flex flex-col justify-center" aria-label="Setup introduction and description">
          <h2 className="font-bold"   aria-label={translations.intro.title}>
            {translations.intro.title}
          </h2>
          <h5   className="font-bold opacity-50" aria-label={translations.intro.remark}>
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
        <article className="flex items-center justify-center p-[8rem] bg-stone-200" aria-label="Setup action button">
          <Button
            size="medium"
            variant="primary"
            refButton={refButton}
            onClick={handleClick}            
          >
            {message}
          </Button>
        </article>
      </section>
    </main>
  );
}

export default TheStartSetupPage;
