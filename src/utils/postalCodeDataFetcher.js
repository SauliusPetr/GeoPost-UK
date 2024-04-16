import { useEffect, useState } from "react";

const usePostalCodeAPI = (postalCode) => {
  const [postalCodeData, setPostalCodeData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!postalCode) return;

    setLoading(true);
    setPostalCodeData(null);
    setError(null);

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
        setPostalCodeData(extractPostalCodeData(response));
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

function extractPostalCodeData(repsonse) {
  const postalCodeData = repsonse.result;
  const extractedData = {
    postcode: postalCodeData.postcode,
    country: postalCodeData.country,
    longitude: postalCodeData.longitude,
    latitude: postalCodeData.latitude,
    adminDistrict: postalCodeData.admin_district,
  };

  return extractedData;
}

export { usePostalCodeAPI };
