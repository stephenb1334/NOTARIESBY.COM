export const NOTARIES_BY_ADDRESS = {
  brand: "Notaries By",
  line1: "PO Box 542",
  city: "Elfers",
  region: "FL",
  postalCode: "34680",
  country: "US",
}

export const formatAddressMultiline = (): string =>
  `${NOTARIES_BY_ADDRESS.brand}
${NOTARIES_BY_ADDRESS.line1}
${NOTARIES_BY_ADDRESS.city}, ${NOTARIES_BY_ADDRESS.region} ${NOTARIES_BY_ADDRESS.postalCode}`

export const formatAddressSingleLine = (): string =>
  `${NOTARIES_BY_ADDRESS.brand}, ${NOTARIES_BY_ADDRESS.line1}, ${NOTARIES_BY_ADDRESS.city}, ${NOTARIES_BY_ADDRESS.region} ${NOTARIES_BY_ADDRESS.postalCode}`
