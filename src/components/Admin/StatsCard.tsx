import { ReactNode } from "react";

interface Props {
  title: string;
  count: number;
  icon?: ReactNode;
}

const StatsCard = ({ title, count, icon }: Props) => {
  return (
    <div className="bg-gray-200 border-t-8 border-b-8 border-accent min-w-52 w-max rounded py-2 space-y-2 flex flex-col items-center select-none hover:bg-blue-100 transition-all duration-500">
      <div className="text-4xl font-bold text-accent">{count}</div>
      <h1 className="flex gap-1 items-center">
        {icon}
        <span className="text-lg">{title}</span>
      </h1>
    </div>
  );
};

export default StatsCard;
