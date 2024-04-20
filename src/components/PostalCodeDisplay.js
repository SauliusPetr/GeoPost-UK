import React from "react";

export function DisplayPostalCodeInfo({ loading, error, data }) {
  return (
    <>
      {loading && (
        <div className="flex w-full justify-center items-center">
          <div className="flex w-10 h-10 border-4 border-dotted border-gray-300 rounded-full animate-spin"></div>
        </div>
      )}
      {error && (
        <div className="flex  w-full justify-center items-center">
          Error: {error.message}
        </div>
      )}
      {data && (
        <div className="flex justify-center items-start flex-col h-full text-lg p-4 rounded-lg gap-2 ">
          <p>
            <span className="font-bold">Postcode:</span> {data.postCode}
          </p>
          <p>
            <span className="font-bold">Country:</span> {data.country}
          </p>
          <p>
            <span className="font-bold">Longitude:</span> {data.longitude}
          </p>
          <p>
            <span className="font-bold">Latitude:</span> {data.latitude}
          </p>
          <p className="break-all">
            <span className="font-bold ">Admin District:</span>{" "}
            {data.adminDistrict}
          </p>
        </div>
      )}
    </>
  );
}
