import type { ElementType } from "react";

export type UnorderedListTopic = {
  subtitle: string;
  link: string;
};

export type UnorderedListImpl = {
  title: string;
  icon?: ElementType;
  price?: number;
  features?: string[];
  popular?: boolean;
  topics: UnorderedListTopic[];
};
