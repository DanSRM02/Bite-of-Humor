import Button from "@/components/inputs/button";
import { ReactElement } from "react";

type ButtonListItem = {
  label: string;
  icon: ReactElement;
  onClick: () => void;
  variant?: string;
  size?: string;
};

type ButtonListProps = {
  buttons: ButtonListItem[];
};

const ButtonList = ({ buttons }: ButtonListProps) => {
  return buttons.map((btn) => (
    <Button
      key={btn.label}
      onClick={btn.onClick}
      size={btn.size || "medium"}
      variant={btn.variant || "outline"}
    >
      <span className="flex items-center gap-2">
        {btn.icon}
        {btn.label}
      </span>
    </Button>
  ));
};

export default ButtonList;
