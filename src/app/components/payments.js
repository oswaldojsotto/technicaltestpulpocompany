import Image from "next/image";
import React, { useState } from "react";

const PaymentMethods = ({
  paymentMethod,
  setPaymentMethod,
  creditCardOption,
  setCreditCardOption,
}) => {
  const options = ["Sabadell", "TPV-2", "TPV-3"];

  const [dropdownOption, setDropdownOption] = useState("");

  const handleChange = event => {
    const value = event.target.value;
    setDropdownOption(value);
  };

  const handleOptionChange = event => {
    setPaymentMethod(event.target.value);
  };

  const handleCreditCard = event => {
    setCreditCardOption(event.target.value);
  };

  return (
    <div className="flex flex-col w-full gap-2 text-sm font-medium transition-all">
      <div className="mb-4">
        <p className="text-sm font-bold">Método de pago</p>
      </div>

      <label
        className={`px-4 py-4 border   rounded-md ${
          paymentMethod === "1" ? " border-primary" : "border-white"
        }  `}>
        <div className="flex ">
          <input
            type="radio"
            value="1"
            checked={paymentMethod === "1"}
            onChange={handleOptionChange}
            className="custom-radio"
          />
          <div className="flex justify-between w-full pl-2 -mt-0.5">
            <div className="flex gap-1">
              <p>Tarjeta Bancaria</p>
              <div className="pt-0.5 cursor-help">
                <Image
                  src="/icons/info.svg"
                  width={17}
                  height={17}
                  alt="info_icon"
                />
              </div>
            </div>
            <span className="text-xs text-secondary opacity-[0.5]">
              Instántaneo
            </span>
          </div>
        </div>
        <div className="py-1">
          {paymentMethod === "1" && (
            <div className="flex flex-col gap-2 px-4 py-2">
              <label className="">
                <input
                  type="radio"
                  value="1"
                  checked={creditCardOption === "1"}
                  onChange={handleCreditCard}
                  className={`custom-radio`}
                />{" "}
                Tarjeta terminada en 0909
              </label>
              <label className="">
                <input
                  type="radio"
                  value="2"
                  checked={creditCardOption === "2"}
                  onChange={handleCreditCard}
                  className={`custom-radio`}
                />{" "}
                Utilizar otra tarjeta
              </label>
            </div>
          )}
          {paymentMethod === "1" ? (
            <div className="hidden py-2 xs:block">
              <span className="absolute px-1 ml-3 -mt-2 text-xs bg-white">
                Elige TPV
              </span>
              <select
                className="w-full h-12 px-3 border border-black rounded-sm outline-none"
                value={dropdownOption}
                onChange={handleChange}>
                {options.map((option, index) => (
                  <option
                    className="my-4 border-primary"
                    value={option}
                    key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      </label>

      <label
        className={`p-4 border  rounded-md ${
          paymentMethod === "2" ? " border-primary" : "border-white"
        }  `}>
        <div className="flex ">
          <input
            type="radio"
            value="2"
            checked={paymentMethod === "2"}
            onChange={handleOptionChange}
            className="custom-radio"
          />
          <div className="flex justify-between w-full pl-2 -mt-0.5 ">
            <div className="flex gap-1">
              <p>Bizum</p>
              <div className="pt-0.5 cursor-help">
                <Image
                  src="/icons/info.svg"
                  width={17}
                  height={17}
                  alt="info_icon"
                />
              </div>
            </div>
            <span className="text-xs text-secondary opacity-[0.5] mt-0.5">
              Importe mínimo 10€
            </span>
          </div>
        </div>
      </label>
      <label
        className={`p-4 border  rounded-md ${
          paymentMethod === "3" ? " border-primary" : "border-white"
        }  `}>
        <div className="flex ">
          <input
            type="radio"
            value="3"
            checked={paymentMethod === "3"}
            onChange={handleOptionChange}
            className="custom-radio"
          />
          <div className="flex justify-between w-full pl-2 -mt-0.5 ">
            <div className="flex gap-1">
              <p>Transferencia</p>
              <div className="pt-0.5 cursor-help">
                <Image
                  src="/icons/info.svg"
                  width={17}
                  height={17}
                  alt="info_icon"
                />
              </div>
            </div>
            <span className="text-xs text-secondary opacity-[0.5] mt-0.5">
              No instántaneo
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default PaymentMethods;
