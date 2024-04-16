import React, { useState } from "react";

import PostalCodeInput from "../components/PostalCodeInput";

export function PostalCodeDisplay() {
  const [postalCode, setPostalCode] = useState("");

  console.log("Render");
  console.log("Value >" + postalCode + "<");

  function handlePostalCodeSubmit(newPostalCode) {
    setPostalCode(newPostalCode);
  }

  return (
    <div>
      <PostalCodeInput handleSubmit={handlePostalCodeSubmit} />
    </div>
  );
}
