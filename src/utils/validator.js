export function isValidPostalCode(postalCode) {
  const ukPostalCodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
  return ukPostalCodeRegex.test(postalCode.trim());
}
