"use client";
import Card from "@/components/feedback/card";
import { useJokeSubmission } from "@/contexts/JokeSubmissionContext";

function PreviewCardWorkshopJoke() {
  const { jokeSubmissionData } = useJokeSubmission();

  return (
    <>
      <h3 className="text-center font-medium">Preview joke</h3>
      <Card
        jokeSetup={jokeSubmissionData.setup}
        jokePunchline={jokeSubmissionData.punchline}
        variant="joke"
        isTextRaw={true}
        flags={jokeSubmissionData.flags}
        badge={jokeSubmissionData.category}
      />
    </>
  );
}

export default PreviewCardWorkshopJoke;
