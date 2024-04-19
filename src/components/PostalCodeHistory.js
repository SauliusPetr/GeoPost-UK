import React from "react";

export function PostalCodeHistory({ postalCodeCache, onDelete, onDisplay }) {
  function handleDisplay(postalCode) {
    onDisplay(postalCode);
  }
  function handleDeleteFunction(postalCode) {
    onDelete(postalCode);
  }
  return (
    <div>
      <h1>HISROTY:</h1>
      {postalCodeCache && (
        <ul>
          {Object.keys(postalCodeCache).map((key) => {
            return (
              <ol key={key} className="flex gap-x-4">
                <div onClick={() => handleDisplay(key)}>
                  {postalCodeCache[key].postCode}
                </div>
                <div onClick={() => handleDeleteFunction(key)}> Del</div>
              </ol>
            );
          })}
        </ul>
      )}
    </div>
  );
}
