import "./App.css";
import React, { useState, useEffect } from "react";

import PostalCodeInput from "./components/PostalCodeInput";
import { DisplayPostalCodeInfo } from "./components/PostalCodeDisplay";

import { usePostalCodeAPI } from "./utils/postalCodeDataFetcher";
import { formatPostalCode } from "./utils/formattingOperations";
import { PostalCodeHistory } from "./components/PostalCodeHistory";

function App() {
  const [postalCode, setPostalCode] = useState("");
  const [postalCodeCache, setPostalCodeCache] = useState({});

  const { loading, postalCodeData, error } = usePostalCodeAPI(
    postalCode,
    postalCodeCache
  );

  /*
    Add postalCode to postalCodeCache if not present.
    Rerender only when postalCodeData changes.
  */
  useEffect(() => {
    if (
      postalCodeData &&
      postalCode &&
      !isPostalCodeCached(postalCode, postalCodeCache)
    ) {
      addPostalCodeToCache(postalCode, postalCodeData);
    }
  }, [postalCodeData]);

  function handleDelete(postalCodeToDelete) {
    const newPostalCodeCache = { ...postalCodeCache };
    delete newPostalCodeCache[postalCodeToDelete];
    setPostalCodeCache(newPostalCodeCache);

    /* 
      Reset postalCode so that postalCode, the current displayed code,
      is not fetched by usePostalCodeAPI
    */
    if (postalCodeToDelete === postalCode) {
      setPostalCode("");
    }
  }

  /*
    Fetch new data if not in added in postalCodeCache.
  */
  function handleSubmit(postalCodeToSubmit) {
    const formattedCode = formatPostalCode(postalCodeToSubmit);
    if (isPostalCodeCached(formattedCode, postalCodeCache)) {
      return;
    }
    setPostalCode(formattedCode);
  }

  function handleDisplay(postalCode) {
    setPostalCode(postalCode);
  }

  const addPostalCodeToCache = (postalCodeToAdd, postalCodeData) => {
    setPostalCodeCache({
      ...postalCodeCache,
      [formatPostalCode(postalCodeToAdd)]: postalCodeData,
    });
  };

  return (
    <div className="App grid grid-cols-2 grid-rows-3 ">
      <PostalCodeInput handleSubmit={handleSubmit} className="" />
      <PostalCodeHistory
        postalCodeCache={postalCodeCache}
        className="row-span-2"
        onDelete={handleDelete}
        onDisplay={handleDisplay}
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

function isPostalCodeCached(postalCode, postCodeHistory) {
  return postCodeHistory[postalCode] ? true : false;
}
