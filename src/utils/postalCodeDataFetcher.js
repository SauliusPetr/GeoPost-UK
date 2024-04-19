import { useEffect, useState } from "react";
import { formatPostalCodeObject } from "./formattingOperations";

/*
    Custom Hook that fetches new postalCodeData based on provided postalCode.
    If the postalCode is present in postalCodeCache it will return the object instead .
*/

const usePostalCodeAPI = (postalCode, postalCodeCache) => {
  const [postalCodeData, setPostalCodeData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPostalCodeData(null);
    setError(null);

    if (!postalCode) return;
    if (postalCode && postalCodeCache[postalCode]) {
      setPostalCodeData(postalCodeCache[postalCode]);
      return;
    }

    setLoading(true);

    fetch(`https://api.postcodes.io/postcodes/${postalCode}`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 400) {
            throw new Error("Bad request");
          } else if (response.status === 404) {
            throw new Error("Postal Code Not Found");
          } else if (response.status === 500) {
            throw new Error("Internal Server Error");
          } else {
            throw new Error("Something went wrong");
          }
        }

        return response.json();
      })
      .then((response) => {
        setPostalCodeData(formatPostalCodeObject(response));
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postalCode]);

  return { postalCodeData, error, loading };
};

export { usePostalCodeAPI };
