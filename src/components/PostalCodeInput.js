import React from "react";
import { useState } from "react";
import { isValidPostalCode } from "../utils/validator";

export default function PostalCodeInput({ handleSubmit }) {
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState(null);

  /*
    Use callback function to submit if postalCode is in good format
  */
  function handleSubmitButton() {
    if (isValidPostalCode(postalCode)) {
      handleSubmit(postalCode);
      setError(null);
      setPostalCode("");
    } else {
      setError("Invalid UK Postal Code");
    }
  }

  return (
    <div className="relative flex gap-2 ">
      <div className=" flex flex-col bottom-16">
        <label className="text-sm pb-2">Postal code</label>
        <input
          className="rounded-md pl-2 py-1 border-0 border-neutral-300 focus:outline-none text-zinc-950   "
          type="text"
          placeholder="Postal Code Nr."
          onChange={(event) => setPostalCode(event.target.value)}
          value={postalCode}
          maxLength={18}
          required
        ></input>{" "}
      </div>
      <button
        className="rounded-md border-0 border-neutral-300 bg-amber-200  self-end size-8 font-semibold hover:bg-amber-400"
        onClick={handleSubmitButton}
      >
        {">"}
      </button>
      {error && <p className="absolute top-16 text-red-500 ">{error}</p>}
    </div>
  );
}
