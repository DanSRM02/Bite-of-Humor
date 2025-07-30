import Heading from "@/components/dataDisplay/heading";
import LeadIn from "@/components/dataDisplay/leadIn";
import React from "react";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const { title } = props;
  
  const steps = [
    {
      heading: "1. Write",
      paragraph: "Fill out the form with your joke setup and punchline"
    },
    {
      heading: "2. Preview", 
      paragraph: "Watch your joke come to life with dynamic styling"
    },
    {
      heading: "3. Submit",
      paragraph: "Get instant feedback and share your humor with the world"
    }
  ];

  return (
    <header className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <Heading className="text-center font-bold underline text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-12" isTextRaw>
        {title}
      </Heading>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={`step-${index}`} className="flex justify-center">
            <LeadIn
              isTextRaw
              variant="secondary"
              heading={step.heading}
              paragraph={step.paragraph}
            />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
