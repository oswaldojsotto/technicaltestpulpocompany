import { useState, useEffect } from "react";

const useCurrencyFormat = (value, decimals = true) => {
  const [formattedValue, setFormattedValue] = useState("");

  useEffect(() => {
    const formatValue = (val, decimals) => {
      const numberValue = Number(val);
      if (isNaN(numberValue)) {
        return "Invalid number";
      }
      const formattedNumber = new Intl.NumberFormat("es", {
        minimumFractionDigits: decimals ? 2 : 0,
        maximumFractionDigits: decimals ? 2 : 0,
      }).format(numberValue);
      return `${formattedNumber}€`;
    };

    setFormattedValue(formatValue(value, decimals));
  }, [value, decimals]);

  return formattedValue;
};

export default useCurrencyFormat;
