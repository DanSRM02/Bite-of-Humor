import { Icon } from "@iconify/react";

type BenefitItemProps = {
  icon: string;
  title: string;
  description: string;
};

const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
        <Icon icon={icon} className="h-6 w-6 text-stone-600" />
      </div>
      <div>
        <dt className="font-semibold text-stone-900 mb-1">{title}</dt>
        <dd className="text-sm text-stone-600">{description}</dd>
      </div>
    </div>
  );
};

export default BenefitItem;
