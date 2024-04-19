export function formatPostalCodeObject(repsonse) {
  const postalCodeData = repsonse.result;
  const extractedData = {
    postCode: postalCodeData.postcode,
    country: postalCodeData.country,
    longitude: postalCodeData.longitude,
    latitude: postalCodeData.latitude,
    adminDistrict: postalCodeData.admin_district,
  };

  return extractedData;
}

export function formatPostalCode(postalCode) {
  return postalCode.replace(" ", "").toLowerCase();
}
