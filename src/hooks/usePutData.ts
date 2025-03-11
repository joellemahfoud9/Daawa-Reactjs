import { useState } from "react";
import { API_URL } from "../constant/constants";

interface Props {
  endpoint: string;
  body: object;
  token?:string;
}

interface Response {
  isLoading: boolean;
  error: string | null;
  data: any | null;
  putData: () => Promise<void>;
}

const usePutData = ({ endpoint, body , token }: Props): Response => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);

  const putData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL + endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, putData };
};

export default usePutData;
