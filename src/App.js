import "./App.css";
import React, { useState } from "react";

import PostalCodeInput from "./components/PostalCodeInput";
import { DisplayPostalCodeInfo } from "./components/PostalCodeDisplay";

import { usePostalCodeAPI } from "./utils/postalCodeDataFetcher";

function App() {
  const [postalCode, setPostalCode] = useState("");

  //make an object act as a kind of hash
  //refrence by formatted postal code
  // const [postalCodeHistory, setPostalCodeHisotry] = useState({});

  const { loading, postalCodeData, error } = usePostalCodeAPI(postalCode);

  function handlePostalCodeSubmit(newPostalCode) {
    setPostalCode(newPostalCode);
  }

  return (
    <div className="App">
      <PostalCodeInput handleSubmit={handlePostalCodeSubmit} />
      <DisplayPostalCodeInfo
        loading={loading}
        error={error}
        data={postalCodeData}
      />
    </div>
  );
}

export default App;

// function addToHistory(newObject, history, setHistory) {}
