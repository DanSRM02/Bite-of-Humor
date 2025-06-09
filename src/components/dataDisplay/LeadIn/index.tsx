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
          //className={classes["lead-in"]}
          aria-label={heading}
          tabIndex={0}
        >
          <h5>{heading}</h5>
          <p>{paragraph}</p>
        </article>
      );
      break;

    default:
      contentVariant = (
        <article
          //   className={classes["lead-in"]}
          aria-label={heading}
          tabIndex={0}
        >
          <span>
            <h1>{heading}</h1>
            <p>{paragraph}</p>
          </span>
        </article>
      );
      break;
  }
  return contentVariant;
};

export default LeadIn;
