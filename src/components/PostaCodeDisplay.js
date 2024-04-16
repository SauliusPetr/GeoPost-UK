import React from "react";

export function GeoDataDisplay({ data }) {
  return (
    <div>
      <h2>Geo Data</h2>
      <p>Postcode: {data.postcode}</p>
      <p>Country: {data.country}</p>
      <p>Longitude: {data.longitude}</p>
      <p>Latitude: {data.latitude}</p>
      <p>Admin District: {data.adminDistrict}</p>
    </div>
  );
}
