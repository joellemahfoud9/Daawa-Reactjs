import { ReactNode } from "react";
import { FaPlus } from "react-icons/fa";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

const AddFAB = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="fixed bottom-12 right-12 p-4 rounded-full bg-accent"
    >
      {children ? children : <FaPlus color="white" className="w-4 h-4" />}
    </div>
  );
};

export default AddFAB;
