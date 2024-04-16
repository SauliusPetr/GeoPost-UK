import React, { useState } from "react";

import PostalCodeInput from "../components/PostalCodeInput";
import { GeoDataDisplay } from "../components/PostaCodeDisplay";

import { usePostalCodeAPI } from "../utils/postalCodeDataFetcher";

export function PostalCodeDisplay() {
  const [postalCode, setPostalCode] = useState("");
  const { loading, postalCodeData, error } = usePostalCodeAPI(postalCode);

  console.log("Render");
  console.log("Value >" + postalCode + "<");
  console.log(postalCodeData, loading, error);

  function handlePostalCodeSubmit(newPostalCode) {
    setPostalCode(newPostalCode);
  }

  return (
    <div>
      <PostalCodeInput handleSubmit={handlePostalCodeSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Error... {error.message}</p>}
      {postalCodeData && <GeoDataDisplay data={postalCodeData} />}
    </div>
  );
}
