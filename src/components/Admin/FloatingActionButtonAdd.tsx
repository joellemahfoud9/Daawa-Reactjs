import { FaPlus } from "react-icons/fa";

const FloatingActionButtonAdd = () => {
  return (
    <button className="fixed bottom-12 right-12 p-4 rounded-full bg-accent">
      <FaPlus color="white" className="w-4 h-4" />
    </button>
  );
};

export default FloatingActionButtonAdd;
