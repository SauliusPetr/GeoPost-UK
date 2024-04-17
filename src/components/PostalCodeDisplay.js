import React from "react";

export function DisplayPostalCodeInfo({ loading, error, data }) {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error... {error.message}</p>}
      {data && (
        <div>
          <h2>Postal Code Data</h2>
          <p>Postcode: {data.postcode}</p>
          <p>Country: {data.country}</p>
          <p>Longitude: {data.longitude}</p>
          <p>Latitude: {data.latitude}</p>
          <p>Admin District: {data.adminDistrict}</p>
        </div>
      )}
    </>
  );
}
