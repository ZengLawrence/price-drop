import { VendorPrice } from "../model/VendorPrice"

function fetchPrices(): Promise<VendorPrice[]> {
  return new Promise(resolve =>
    resolve([
      {vendor: "Amazon", price: 3.99},
      {vendor: "Instacart", price: 3.39},
      {vendor: "Mercato", price: 2.00},
    ])
  )
}

export {
  fetchPrices
}