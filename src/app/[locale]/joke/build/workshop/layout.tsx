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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <article className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <section className="w-full max-w-2xl mx-auto lg:flex-1 lg:mx-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                {form}
              </div>
            </section>
            
            <div className="hidden lg:flex items-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <div className="w-full max-w-2xl mx-auto lg:flex-1 lg:mx-0 space-y-6 lg:space-y-8">
              <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                {preview}
              </section>
              <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                {feedback}
              </section>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-12 flex justify-center">
            <Button
              size="medium"
              variant="primary"
              form="complete-joke"
              type="submit"
              className="w-full sm:w-auto min-w-[200px] shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              Send Joke
            </Button>
          </div>
        </article>
      </div>
    </JokeSubmissionProvider>
  );
}
