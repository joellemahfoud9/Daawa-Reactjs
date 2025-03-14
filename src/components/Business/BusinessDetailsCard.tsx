import { Business } from "../../models/Business";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

interface Props {
  business: Business;
}

const BusinessDetailsCard = ({ business }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-200 rounded-xl p-4 gap-4 overflow-hidden w-full sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 mx-auto">
      <img
        className="w-16 h-16 sm:w-20 sm:h-20 rounded object-cover"
        src={business.image}
        alt={business.name}
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-lg sm:text-xl font-bold">{business.name}</h1>
        <span className="flex items-center gap-1 text-sm sm:text-base">
          <MdEmail />
          {business.email}
        </span>
        <span className="flex items-center gap-1 text-sm sm:text-base">
          <MdPhone />
          {business.phone}
        </span>
        <span className="flex items-center gap-1 text-sm sm:text-base">
          <MdLocationPin />
          {business.address}
        </span>
      </div>
    </div>
  );
};

export default BusinessDetailsCard;
