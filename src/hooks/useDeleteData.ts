import { useState } from "react";
import { API_URL } from "../constant/constants";

const useDeleteData = (endpoint: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<string | null>(null);

  const deleteData = async (id: string) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(API_URL + endpoint + `/${id}`, {
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });

      if (!response.ok) {
        throw new Error("Failed to delete items");
      }

      const responseJson = await response.json();
      setData(responseJson);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteData,
    isLoading,
    error,
    data,
  };
};

export default useDeleteData;
