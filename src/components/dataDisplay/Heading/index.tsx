"use client"
import { HTMLElementType, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type HeadingProps = {
  children: string | ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  tabIndex?: number;
};

export default function Heading({
  tabIndex,
  children,
  level = 1,
  className,
}: HeadingProps) {
  const Heading: HTMLElementType = `h${level}` as HTMLElementType;
  const { t } = useTranslation();

  const content = typeof children === "string" ? t(children) : children;

  return <Heading tabIndex={tabIndex} className={className}>{content}</Heading>;
}
