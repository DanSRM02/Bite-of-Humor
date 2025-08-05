import { formatText } from "@/utils/verifyTextFormat";
import { useTranslations } from "next-intl";

type ChipVariant = "warning" | "info" | "error" | "success" | "neutral";

type ChipProps = {
  textChip: string;
  variant: ChipVariant;
  isTextRaw?: boolean;
};

const CHIP_VARIANTS = {
  warning: "text-amber-800 bg-amber-50 border border-amber-200",
  info: "text-blue-800 bg-blue-50 border border-blue-200", 
  error: "text-red-800 bg-red-50 border border-red-200",
  success: "text-green-800 bg-green-50 border border-green-200",
  neutral: "text-stone-700 bg-stone-100 border border-stone-300",
} as const;

const Chip = ({ 
  textChip, 
  variant,
  isTextRaw = false 
}: ChipProps) => {
  const t = useTranslations();
  const formattedTextChip = formatText(isTextRaw, textChip, t);
  const chipClasses = CHIP_VARIANTS[variant];

  return (
    <div className="flex justify-center mb-4">
      <span
        className={`${chipClasses} font-medium px-4 py-2 rounded-lg shadow-sm text-sm inline-flex items-center gap-2 max-w-fit`}
        role="status"
        aria-live="polite"
      >
        {variant === "warning" && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )}
        {variant === "error" && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )}
        {variant === "info" && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        )}
        {variant === "success" && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
        {formattedTextChip}
      </span>
    </div>
  );
};

export default Chip;

