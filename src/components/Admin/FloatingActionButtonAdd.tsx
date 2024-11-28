import { FaPlus } from "react-icons/fa";

const FloatingActionButtonAdd = () => {
  return (
    <div className="fixed bottom-12 right-12 p-4 rounded-full bg-accent">
      <FaPlus color="white" className="w-4 h-4" />
    </div>
  );
};

export default FloatingActionButtonAdd;
