import React from "react";
import { useState } from "react";
import { isValidPostalCode } from "../utils/validator";

export default function PostalCodeInput({ handleSubmit }) {
  const [postalCode, setPostalCode] = useState("");

  function handleSubmitButton() {
    if (isValidPostalCode(postalCode)) {
      handleSubmit(postalCode);
      setPostalCode("");
    } else {
      console.log("BAD POSTCODE FORMAT");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Postal Code Nr."
        onChange={(event) => setPostalCode(event.target.value)}
        value={postalCode}
        required
      ></input>
      <button onClick={handleSubmitButton}>Submit</button>
    </div>
  );
}
