// import { useState } from "react";
// import { API_URL } from "../constant/constants";

// interface Props {
//   endpoint: string;
//   body: object;
//   token?:string;
// }

// interface Response {
//   isLoading: boolean;
//   error: string | null;
//   data: any | null;
//   patchData: () => Promise<void>;
// }

// const usePatchdata = ({ endpoint, body ,token }: Props): Response => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [data, setData] = useState<any | null>(null);

//   const patchData = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const isFormData = body instanceof FormData;

//       const response = await fetch(API_URL + endpoint, {
//         method: "PATCH",
//         headers: isFormData
//           ? {}
//           : {
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}`,
//             },
//         body: isFormData ? body : JSON.stringify(body), 
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update data");
//       }

//       const result = await response.json();
//       setData(result);
//     } catch (err: any) {
//       setError(err.message || "An error occurred");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { isLoading, error, data, patchData };
// };

// export default usePatchdata;

import { useState } from "react";
import { API_URL } from "../constant/constants";

interface Props {
  endpoint: string;
  body: object;
  token?: string;
}

interface Response {
  isLoading: boolean;
  error: string | null;
  data: any | null;
  patchData: () => Promise<void>;
}

const usePatchdata = ({ endpoint, body, token }: Props): Response => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);

  const patchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const isFormData = body instanceof FormData;

      const headers: HeadersInit = {};

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

     
      if (!isFormData) {
        headers["Content-Type"] = "application/json";
      }

      const response = await fetch(API_URL + endpoint, {
        method: "PATCH",
        headers, 
        body: isFormData ? body : JSON.stringify(body), 
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

  return { isLoading, error, data, patchData };
};

export default usePatchdata;