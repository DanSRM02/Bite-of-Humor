"use client";
import { formatText } from "@/utils/verifyTextFormat";
import { useTranslations } from "next-intl";
import { ElementType, ReactNode } from "react";

type HeadingProps = {
  children: string | ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  className?: string;
  tabIndex?: number;
  isTextRaw?: boolean;
};

export default function Heading(props: HeadingProps) {
  const { level = 1, isTextRaw = false, children, className } = props;
  const Heading: ElementType = `h${level}` as ElementType;
  const t = useTranslations();

  const content =
    typeof children === "string"
      ? formatText(isTextRaw, children, t)
      : children;

  return <Heading className={className}>{content}</Heading>;
}
