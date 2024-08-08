"use client";
import React, { useState } from "react";
import AmmountButton from "./ammount-button";

const RechargeAmmount = ({ amounts, value, setValue }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleChange = e => {
    let inputValue = e.target.value.replace(/[^0-9.]/g, "");

    const [integerPart, decimalPart] = inputValue.split(".");

    if (integerPart.length > 10) {
      inputValue =
        integerPart.slice(0, 10) + (decimalPart ? "." + decimalPart : "");
    }

    if (decimalPart && decimalPart.length > 2) {
      inputValue = integerPart + "." + decimalPart.slice(0, 2);
    }

    if (!inputValue || parseFloat(inputValue) < 1) {
      inputValue = "1.00";
    }

    setValue(inputValue);
    setSelectedAmount(null);
  };

  const handleButtonClick = amount => {
    setValue(amount);
    setSelectedAmount(amount);
  };

  return (
    <div>
      <div>
        <p className="text-sm font-bold">Selecciona Importe a Añadir:</p>
      </div>
      <div className="flex my-4 font-medium">
        <span className="absolute pt-[13px] ml-6">€</span>
        <span className="absolute -mt-[8px] ml-4 text-xs bg-white px-2">
          Importe (€)
        </span>
        <input
          className="w-full h-12 px-10 border border-black rounded-md outline-none"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </div>
      <span className="absolute -my-2 text-xs">Importe mínimo 1€</span>
      <div className="flex justify-between w-full gap-2 my-12 sm:gap-4">
        {amounts.map(({ text, value }) => (
          <AmmountButton
            key={value}
            text={`${text} €`}
            click={() => handleButtonClick(value)}
            selected={selectedAmount === value}
          />
        ))}
      </div>
    </div>
  );
};

export default RechargeAmmount;
