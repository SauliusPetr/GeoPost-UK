import "./App.css";
import React, { useState } from "react";

import PostalCodeInput from "./components/PostalCodeInput";
import { DisplayPostalCodeInfo } from "./components/PostalCodeDisplay";

import { usePostalCodeAPI } from "./utils/postalCodeDataFetcher";
import { formatPostalCode } from "./utils/formattingOperations";
import { PostalCodeHistory } from "./components/PostalCodeHistory";

function App() {
  const [postalCode, setPostalCode] = useState("");
  const [postalCodeHistory, setPostalCodeHisotry] = useState({});

  /*
    Custom Hook that fetches new postalCodeData based on postalCode.
    Does not make call if postalCode is in postalCodeHistory
  */
  const { loading, postalCodeData, error } = usePostalCodeAPI(
    postalCode,
    postalCodeHistory
  );

  /*
    Update postalCode, then re-render happens which triggers usePostalCodeAPI to fetch new data
  */
  function handlePostalCodeSubmit(newPostalCode) {
    const formattedCode = formatPostalCode(newPostalCode);
    if (postalCodeCached(formattedCode, postalCodeHistory)) {
      return;
    }
    setPostalCode(formattedCode);
  }

  /*
    "Listens" on re-renders and updates postalCodeHistory if postCode is new
  */
  if (postalCodeData && !postalCodeCached(postalCode, postalCodeHistory)) {
    setPostalCodeHisotry({
      ...postalCodeHistory,
      [postalCode]: postalCodeData,
    });
  }

  return (
    <div className="App grid grid-cols-2 grid-rows-3 ">
      <PostalCodeInput handleSubmit={handlePostalCodeSubmit} className="" />
      <PostalCodeHistory
        postalCodeHistory={postalCodeHistory}
        className="row-span-2"
      />
      <DisplayPostalCodeInfo
        loading={loading}
        error={error}
        data={postalCodeData}
        className=""
      />
    </div>
  );
}

export default App;

function postalCodeCached(postalCode, postCodeHistory) {
  return postCodeHistory[postalCode] ? true : false;
}
