import { useState, useEffect } from "react";
import { API_URL } from "../constant/constants";

type FetchState<T> = {
  isLoading: boolean;
  error: string | null;
  data: T | null;
};

const useGetData = <T>(endpoint: string): FetchState<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL + endpoint);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result: T = await response.json();
        setData(result);
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

    getData();
  }, [endpoint]);

  return { isLoading, error, data };
};

export default useGetData;
