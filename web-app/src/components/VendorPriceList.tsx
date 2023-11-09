import { useEffect, useState } from "react";
import { VendorPrice } from "../model/VendorPrice";
import { fetchPrices } from "../services";

function VendorPriceList() {

  const [vendorPrices, setVendorPrices] = useState([] as VendorPrice[]);

  useEffect(() => {
    fetchPrices().then(prices => setVendorPrices(prices));
  });

  const priceItems = vendorPrices.map((price, i) => <li key={i}>{price.vendor}: {price.price}</li>);
  return (
    <ul>{priceItems}</ul>
  );
}

export default VendorPriceList;