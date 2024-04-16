import React from "react";

export function PostalCodeHistory({ savedPostalCode }) {
  function displayFunction() {
    //display this object
  }
  function deleteFunction() {
    //delete this object
  }
  return (
    <div>
      {/* loop through ach item, display postalcode and delete option */}
      {savedPostalCode.map((postalCodeObject) => {
        <div>
          <div onClick={displayFunction}>{postalCodeObject.postalcode}</div>
          <div onClick={deleteFunction}>-</div>
        </div>;
      })}
    </div>
  );
}
