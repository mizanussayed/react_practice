import { useCallback, useEffect, useState } from "react";

export default function useCurrencyInfo(fromCurrency, toCurrency, amount) {
  const [rate, setRate] = useState({});
  const [currencyCode, setCurrencyCode] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.currencybeacon.com/v1/latest?api_key=hvDSXf5YGsZm8aYVG4SQqSpYNCc8N91t`
    )
      .then((res) => res.json())
      .then((res) => 
        {setCurrencyCode(Object.keys(res.rates))
          console.log(res)
        }
    );
  }, []);

  useEffect(() => {
    fetch(
      `https://api.currencybeacon.com/v1/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=hvDSXf5YGsZm8aYVG4SQqSpYNCc8N91t`
    )
      .then((res) => res.json())
      .then((res) => setRate(res.response.value));
  }, [fromCurrency, toCurrency, amount]);
  return { rate, currencyCode };
}
