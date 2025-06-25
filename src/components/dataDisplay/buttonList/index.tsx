import Button, { ButtonProps } from "@/components/inputs/button";
import { ReactElement } from "react";

type ButtonListItem = {
  label: string;
  icon: ReactElement;
  onClick: () => void;
};

type ButtonListProps = {  
  buttons: ButtonListItem[]
};

const ButtonList = ({ buttons }: ButtonListProps) => {
  return buttons.map((btn) => (
    <Button
      key={btn.label}
      onClick={btn.onClick}
      size="medium"
      variant="outline"
    >
      <span className="flex items-center gap-2">
        {btn.icon}
        {btn.label}
      </span>
    </Button>
  ));
};

export default ButtonList;
