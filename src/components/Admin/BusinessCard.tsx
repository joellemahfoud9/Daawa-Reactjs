import { FaRegCheckCircle } from "react-icons/fa";
import { Business } from "../../models/Business";

interface Props {
  business: Business;
  selected: boolean;
  onClick: () => void;
}

const BusinessCard = ({ business, selected, onClick }: Props) => {
  return (
    <div
      className="flex relative min-h-52 min-w-52 
    bg-gradient-to-t from-accent/60
    rounded-3xl overflow-hidden shadow
    transition-all duration-500 hover:bg-accent hover:bg-opacity-25"
      onClick={onClick}
    >
      {selected && (
        <FaRegCheckCircle className="absolute w-full h-full pb-10 pt-4" />
      )}
      <img
        className="-z-10 absolute h-full w-full object-cover"
        src={business.image}
      />
      <div className="z-10 flex flex-col flex-wrap text-white self-end p-4">
        <span className="select-none">{business.name}</span>
        <span className="select-none line-clamp-1">{business.address}</span>
      </div>
    </div>
  );
};

export default BusinessCard;
