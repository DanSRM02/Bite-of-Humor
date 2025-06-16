import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type ChipProps = {
  textChip: string;
  color: string;
};
const Chip = ({ textChip, color = "blue" }: ChipProps) => {
  const { t } = useTranslation();
  return (
    <span
      className={`text-${color}-700 bg-${color}-100 border border-${color}-300 font-medium p-4 rounded-md`}
    >
      {t(textChip)}
    </span>
  );
};

export default Chip;
