import Button from "@/components/inputs/button";
import Header from "@/components/layout/header";
import { JokeSubmissionProvider } from "@/contexts/JokeSubmissionContext";
import { ReactNode } from "react";

type WorkshopLayoutProps = {
  children: ReactNode;
  preview: ReactNode;
  form: ReactNode;
  feedback: ReactNode;
};
export default function WorkshopLayout({
  children,
  form,
  preview,
  feedback,
}: WorkshopLayoutProps) {
  return (
    <JokeSubmissionProvider>
      <Header title="Workshop" />
      {children}
      <article className="flex justify-center flex-wrap gap-25">
        <section className="flex flex-col flex-1 items-center">{form}</section>
        <div className="hidden md:block w-px border-[.5px] border-dashed"></div>
        <div className="flex-1 flex flex-col justify-center gap-15">
          <section className="">{preview}</section>
          <section className="">{feedback}</section>
        </div>
      </article>
      <Button
        size="medium"
        variant="primary"
        form="complete-joke"
        type="submit"
      >
        Send Joke
      </Button>
    </JokeSubmissionProvider>
  );
}
