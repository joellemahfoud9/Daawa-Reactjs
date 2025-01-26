interface Props {
  dish: Dish;
}

interface Dish {
  name: string;
  description: string;
  type: string;
  price: number;
  image: string;
}

const BusinessDish = ({ dish }: Props) => {
  return (
    <div className="flex h-32 gap-4 my-4">
      <div className="w-32 min-w-32 aspect-square rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={dish.image} alt="" />
      </div>
      <div className="w-full flex flex-col justify-between py-2">
        <div>
          <h1 className="text-2xl flex justify-between">
            <span className="font-bold">{dish.name}</span>
            <span>{" $" + dish.price}</span>
          </h1>
          <p className="line-clamp-2">{dish.description}</p>
        </div>
        <span className="text-xl"> {}</span>
      </div>
    </div>
  );
};

export default BusinessDish;
