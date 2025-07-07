"use client";

import { useRef, useState } from "react";
import { redirect } from "next/navigation";
import { modifyPositionElement } from "@/utils/modifyPositionElement";
import Button from "@/components/inputs/button";
import { useTranslations } from "next-intl";

function TheStartSetupPage() {
  const refButton = useRef<HTMLButtonElement>(null);
  const t = useTranslations("FirstSetup");
  const [newMessage, setNewMessage] = useState(
    t("actions.buttonMessages.message1")
  );
  const [timesClicked, setTimesClicked] = useState(2);

  const translations = {
    intro: {
      title: t("introduction.title"),
      remark: t("introduction.remark"),
      paragraph1: t.rich("introduction.paragraph1", {
        important: (chunks) => <strong>{chunks}</strong>,
      }),
      paragraph2: t.rich("introduction.paragraph2", {
        important: (chunks) => <strong>{chunks}</strong>,
      }),
      paragraph3: t.rich("introduction.paragraph3", {
        important: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    actions: {
      buttonMessage: t("actions.buttonMessages.message1"),
    },
  };

  function handleClick() {
    setTimesClicked((prev) => prev + 1);
    const buttonUtil = modifyPositionElement(refButton.current);
    const shouldRedirectToNextStep = timesClicked === 6;
    const shouldChangePosition = timesClicked <= 4;
    const shouldDefaultPosition = timesClicked === 5;
    const shouldShowNewMessage = timesClicked <= 5;

    if (shouldChangePosition) {
      buttonUtil.changePosition({ maxOffsetX: 25, maxOffsetY: 25 });
    }

    if (shouldDefaultPosition) {
      buttonUtil.defaultPosition();
    }

    if (shouldShowNewMessage) {
      setNewMessage(t(`actions.buttonMessages.message${timesClicked}`));
    }

    if (shouldRedirectToNextStep) {
      redirect("/joke/setup/medium");
    }
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      aria-label="First setup main content"
    >
      <h1 className="mb-2 font-bold" aria-label="Bite Of Humor heading">
        Bite Of Humor
      </h1>
      <section
        className="flex flex-wrap justify-center gap-[6rem] mt-12"
        aria-label="Setup question and interaction"
      >
        <article
          className="flex flex-col justify-center"
          aria-label="Setup introduction and description"
        >
          <h2 className="font-bold" aria-label={translations.intro.title}>
            {translations.intro.title}
          </h2>
          <h5
            className="font-bold opacity-50"
            aria-label={translations.intro.remark}
          >
            {translations.intro.remark}
          </h5>
          <p>{translations.intro.paragraph1}</p>
          <p>{translations.intro.paragraph2}</p>
          <p>{translations.intro.paragraph3}</p>
        </article>
        <article
          className="flex items-center justify-center p-[8rem] bg-stone-200"
          aria-label="Setup action button"
        >
          <Button
            size="medium"
            variant="primary"
            refButton={refButton}
            onClick={handleClick}
          >
            {newMessage}
          </Button>
        </article>
      </section>
    </main>
  );
}

export default TheStartSetupPage;
