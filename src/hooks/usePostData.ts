import { useState } from "react";
import { API_URL } from "../constant/constants";

interface UsePostDataProps<T> {
  endpoint: string;
  body: T;
}

interface UsePostDataResponse {
  isLoading: boolean;
  error: string | null;
  data: any | null;
  postData: () => Promise<void>;
}

const usePostData = <T>({
  endpoint,
  body,
}: UsePostDataProps<T>): UsePostDataResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);

  const postData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const isFormData = body instanceof FormData;

      const response = await fetch(API_URL + endpoint, {
        method: "POST",
        headers: isFormData
          ? {}
          : {
              "Content-Type": "application/json",
            },
        body: isFormData ? body : JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, postData };
};

export default usePostData;
