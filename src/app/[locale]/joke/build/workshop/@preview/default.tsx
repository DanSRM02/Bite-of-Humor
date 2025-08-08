"use client";
import Card from "@/components/feedback/Card";
import { useJokeSubmission } from "@/contexts/JokeSubmissionContext";
import { useTranslations } from "next-intl";

function PreviewCardWorkshopJoke() {
  const { jokeSubmissionData } = useJokeSubmission();
  const t = useTranslations();
  
  const getBadgeKey = () => {
    if (jokeSubmissionData.category === "common.none") {
      return "common.none";
    }
    return `common.categories.${jokeSubmissionData.category}`;
  };

  return (
    <>
      <h3 className="text-center font-medium">{t("WorkshopPage.form.preview")}</h3>
      <Card
        jokeSetup={jokeSubmissionData.setup}
        jokePunchline={jokeSubmissionData.punchline}
        variant="joke"        
        flags={jokeSubmissionData.flags}
        badge={getBadgeKey()}
      />
    </>
  );
}

export default PreviewCardWorkshopJoke;
