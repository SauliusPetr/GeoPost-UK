import React from "react";

export function PostalCodeHistory({ postalCodeHistory }) {
  function displayFunction() {
    //display this object
  }
  function deleteFunction() {
    //delete this object
  }
  return (
    <div>
      <h1>HISROTY:</h1>
      {/* loop through ach item, display postalcode and delete option */}
      {postalCodeHistory && (
        <ul>
          {Object.keys(postalCodeHistory).map((key) => {
            return (
              <ol key={key} className="flex gap-x-4">
                <div onClick={displayFunction}>{key}</div>
                <div onClick={deleteFunction}> Del</div>
              </ol>
            );
          })}
        </ul>
      )}
    </div>
  );
}
