import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { Business } from "../../models/Business";
import { useAtom } from "jotai";
import { cartItemsAtom } from "../../atoms";
import AddFAB from "../../components/Admin/AddFAB";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { useEffect } from "react";

const BusinessDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useGetData<{ data: Business }>(
    `businesses/${id}`
  );
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <>
      {data && (
        <AddFAB
          onClick={() => {
            if (cartItems.some((item) => item.id === data.data.id)) {
              setCartItems(
                cartItems.filter((item) => item.id !== data.data.id)
              );
            } else {
              setCartItems([...cartItems, data.data]);
            }
            console.log(cartItems);
          }}
        >
          {cartItems.some((item) => item.id === data.data.id) ? (
            <MdRemoveShoppingCart color="white" />
          ) : (
            <FaCartPlus color="white" />
          )}
        </AddFAB>
      )}

      <main className="p-page">
        {/* <div>BusinessDetails {id}</div> */}
        {isLoading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>{error}</span>
        ) : data ? (
          <section className="w-full flex gap-8">
            <div className="flex gap-12 bg-gray-200 p-12 w-1/2 rounded-xl">
              <img
                className="w-52 h-52 rounded object-cover"
                src={data.data.image}
              />
              <div className="flex flex-col justify-around text-nowrap">
                <span className="text-4xl font-bold">{data.data.name}</span>
                <span>
                  <span className="text-gray-400">category:</span>
                  {` ` + data.data.category.name}
                </span>
                <span>
                  <span className="text-gray-400">email:</span>
                  {` ` + data.data.email}
                </span>
                <span>
                  <span className="text-gray-400">phone:</span>
                  {` ` + data.data.phone}
                </span>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold">Description:</h1>
                <br />
                {data.data.description}
              </div>
              <div>
                <h1 className="text-4xl font-bold">Address:</h1>
                <br />
                {data.data.address}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
};

export default BusinessDetails;
