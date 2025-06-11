// import classes from "./LeadIn.module.scss";
type LeadInProps = {
  heading: string;
  paragraph: string;
  variant?: string;
};
const LeadIn = ({ heading, paragraph, variant = "primary" }: LeadInProps) => {
  let contentVariant;

  switch (variant) {
    case "secondary":
      contentVariant = (
        <article
          className="flex flex-col flex-wrap"
          aria-label={heading}
          tabIndex={0}
        >
          <h5 className="max-w-[37rem] mt-[1.76rem] font-bold">{heading}</h5>
          <p className="max-w-[45rem]">{paragraph}</p>
        </article>
      );
      break;

    default:
      contentVariant = (
        <article
          className="flex flex-col flex-wrap"
          aria-label={heading}
          tabIndex={0}
        >
          <span>
            <h1 className="max-w-[37rem] mt-[1.76rem] font-bold">{heading}</h1>
            <p className="max-w-[45rem]">{paragraph}</p>
          </span>
        </article>
      );
      break;
  }
  return contentVariant;
};

export default LeadIn;
