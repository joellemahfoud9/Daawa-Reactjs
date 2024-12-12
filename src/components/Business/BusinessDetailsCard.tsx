import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { Business } from "../../models/Business";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

interface Props {
  business: Business;
}

const BusinessDetailsCard = ({ business }: Props) => {
  return (
    <div className="flex bg-gray-200 h-max min-w-96 max-w-96 w-max rounded-xl p-4 gap-4 overflow-hidden">
      <img className="w-16 h-16 rounded" src={business.image} alt="" />
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold">{business.name}</h1>
        <span className="flex items-center gap-1 text-nowrap">
          <MdEmail />
          {business.email}
        </span>
        <span className="flex items-center gap-1 text-nowrap">
          <MdPhone />
          {business.phone}
        </span>
        <span className="flex items-center gap-1 text-nowrap">
          <MdLocationPin />
          {business.address}
        </span>
      </div>
    </div>
  );
};

export default BusinessDetailsCard;
