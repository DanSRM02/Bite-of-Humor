import Heading from "@/components/dataDisplay/heading";
import LeadIn from "@/components/dataDisplay/leadIn";
import React from "react";

type HeaderProps = {
  title: string;
};
const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <header>
      <Heading className="text-center font-bold underline mt-5" isTextRaw>
        {title}
      </Heading>
      <span className="flex gap-5 justify-center flex-wrap text-center">
        <LeadIn
          isTextRaw
          variant="secondary"
          heading="1. Write"
          paragraph="Fill out the form with your joke setup and punchline"
        />
        <LeadIn
          isTextRaw
          variant="secondary"
          heading="2. Preview"
          paragraph="Watch your joke come to life with dynamic styling"
        />
        <LeadIn
        isTextRaw
          variant="secondary"
          heading="3. Submit"
          paragraph="Get instant feedback and share your humor with the world"
        />
      </span>
    </header>
  );
};

export default Header;
