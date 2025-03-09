// import { useState, useEffect } from "react";
// import { API_URL } from "../constant/constants";

// type FetchState<T> = {
//   isLoading: boolean;
//   error: string | null;
//   data: T | null;
// };

// const useGetData = <T>(endpoint: string): FetchState<T> => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [data, setData] = useState<T | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(API_URL + endpoint 
          
//         );

//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const result: T = await response.json();
//         setData(result);
//       } catch (err) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError("An unknown error occurred.");
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getData();
//   }, [endpoint]);

//   return { isLoading, error, data };
// };

// export default useGetData;

// import { useState, useEffect } from "react";
// import { API_URL } from "../constant/constants";

// type FetchState<T> = {
//   isLoading: boolean;
//   error: string | null;
//   data: T | null;
// };

// // Function to get token from cookies
// const getTokenFromCookies = (): string | undefined => {
//   const cookies = document.cookie.split("; ");
//   const tokenCookie = cookies.find((row) => row.startsWith("token="));
//   return tokenCookie ? tokenCookie.split("=")[1] : undefined;
// };

// const useGetData = <T>(endpoint: string): FetchState<T> => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [data, setData] = useState<T | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         // Retrieve token from cookies
//         const token = getTokenFromCookies();

//         const headers: HeadersInit = {
//           "Content-Type": "application/json",
//         };

//         // If token exists, add Authorization header
//         if (token) {
//           headers["Authorization"] = `Bearer ${token}`;
//         }

//         const response = await fetch(API_URL + endpoint, {
//           method: "GET",
//           credentials: "include", // Ensures cookies are sent with request
//           headers,
//         });

//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const result: T = await response.json();
//         setData(result);
//       } catch (err) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError("An unknown error occurred.");
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getData();
//   }, [endpoint]);

//   return { isLoading, error, data };
// };

// export default useGetData;

import { useState, useEffect } from "react";
import { API_URL } from "../constant/constants";

type FetchState<T> = {
  isLoading: boolean;
  error: string | null;
  data: T | null;
};

const useGetData = <T>(endpoint: string, token?: string): FetchState<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const headers: HeadersInit = {};

        if (token) {
          headers["Authorization"] =` Bearer ${token}`;
        }

        const response = await fetch(API_URL + endpoint, {
          headers,
        });

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
  }, [endpoint, token]); 

  return { isLoading, error, data };
};

export default useGetData;