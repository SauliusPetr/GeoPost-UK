import React, { useEffect, useState } from "react";

export function PostalCodeHistory({ postalCodeCache, onDelete, onDisplay }) {
  const [activeCode, setActiveCode] = useState(null);

  /*
    Make newest postal code highlighted
  */
  useEffect(() => {
    if (postalCodeCache) {
      const keys = Object.keys(postalCodeCache);
      setActiveCode(keys[keys.length - 1]);
    }
  }, [postalCodeCache]);

  function handleDisplay(postalCode) {
    onDisplay(postalCode);
    setActiveCode(postalCode);
  }
  function handleDeleteFunction(postalCode) {
    onDelete(postalCode);
    if (activeCode === postalCode) setActiveCode(null);
  }
  return (
    <div>
      <h1 className="pb-4">HISROTY:</h1>
      {postalCodeCache && (
        <ul>
          {Object.keys(postalCodeCache).map((key) => {
            return (
              <ol
                key={key}
                className="flex items-center text-lg justify-between"
              >
                <div
                  className={activeCode === key ? "text-emerald-400" : ""}
                  onClick={() => {
                    handleDisplay(key);
                  }}
                >
                  {postalCodeCache[key].postCode}
                </div>
                <div
                  className="flex w-5 h-5  p-2 justify-center rounded-md items-center font-bold bg-red-500"
                  onClick={() => handleDeleteFunction(key)}
                >
                  -
                </div>
              </ol>
            );
          })}
        </ul>
      )}
    </div>
  );
}
