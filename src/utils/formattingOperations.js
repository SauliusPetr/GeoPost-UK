export function formatPostalCodeData(repsonse) {
  const postalCodeData = repsonse.result;
  const extractedData = {
    postcode: postalCodeData.postcode,
    country: postalCodeData.country,
    longitude: postalCodeData.longitude,
    latitude: postalCodeData.latitude,
    adminDistrict: postalCodeData.admin_district,
  };

  return extractedData;
}

export function formatPostalCode(postalCode) {
  //replace spaces with no space
  //lowercase
  return postalCode.replace(" ", "").toLowerCase();
}
