import React from "react";
import { IconType } from "react-icons";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface SupportCardProps {
  icon: IconType;
  supportInfo: string;
}

const SupportCard: React.FC<SupportCardProps> = ({
  icon: Icon,
  supportInfo,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
      <Icon size={39} />
      <p className="text-center mt-4">{supportInfo}</p>
    </div>
  );
};

export default SupportCard;
