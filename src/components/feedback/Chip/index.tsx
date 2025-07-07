import { formatText } from "@/utils/verifyTextFormat";
import { useTranslations } from "next-intl";

type ChipProps = {
  textChip: string;
  color: string;
  isTextRaw?: boolean
};
const Chip = ({ textChip, color = "blue", isTextRaw = false }: ChipProps) => {
  const t = useTranslations();
  const formattedTextChip = formatText(isTextRaw, textChip, t)
  return (
    <span
      className={`text-${color}-700 bg-${color}-100 border border-${color}-300 font-medium p-4 rounded-md`}
    >
      {formattedTextChip}
    </span>
  );
};

export default Chip;
