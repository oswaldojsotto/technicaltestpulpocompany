"use client";
import React, { useState } from "react";
import useStore from "@/store/store";
import useCurrencyFormat from "@/hooks/useCurrencyFormat";
import PaymentMethods from "./payments";
import RechargeAmmount from "./recharge-ammount";
import Image from "next/image";
import PrimaryButton from "./primary-button";

const RechargeSection = () => {
  const { balance, updateBalance } = useStore();
  const { updateOldBalance } = useStore();
  const { setShowPaymentScreen } = useStore();
  const [value, setValue] = useState("1.00");
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [creditCardOption, setCreditCardOption] = useState("1");

  const amounts = [
    { text: "5", value: "5.00" },
    { text: "10", value: "10.00" },
    { text: "20", value: "20.00" },
    { text: "50", value: "50.00" },
    { text: "100", value: "100.00" },
  ];

  const newBalance = Number(balance) + Number(value);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const verifyPayment = async () => {
    await updateOldBalance(balance);
    await updateBalance(newBalance);
    setShowPaymentScreen(true);
    scrollToTop();
  };

  return (
    <div className="w-full h-auto px-8 lg:pr-16 sm:px-0">
      <section>
        <div className="flex flex-col justify-center w-full h-auto my-4 ">
          <p className="flex justify-center w-full text-[2rem] font-bold">
            {useCurrencyFormat(balance, true)}
          </p>
          <p className="flex justify-center w-full text-sm font-medium">
            Tu saldo
          </p>
        </div>

        <RechargeAmmount amounts={amounts} value={value} setValue={setValue} />
        <PaymentMethods
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          creditCardOption={creditCardOption}
          setCreditCardOption={setCreditCardOption}
        />
        <section className="flex flex-col-reverse justify-between gap-4 py-12 sm:flex-row ">
          <div className="flex gap-2 ">
            <div className="min-w-[1.7rem] w-[1.7rem] min-h-[1.7rem] h-[1.7rem]  flex justify-center mt-[6px]">
              <Image
                style={{ width: "auto", height: "auto" }}
                src="/icons/shield.svg"
                width="20"
                height="20"
                alt="info_icon"
              />
            </div>
            <div className="flex flex-col justify-center mt-[6px] sm:mt-0">
              <p className="flex text-xs font-medium">
                Todos los pagos en Lotopía son 100% seguros. Web certificada por
                Confianza Online.{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full sm:w-[16rem] max-h-12">
            <PrimaryButton
              text="Recargar Cuenta"
              style={`${!paymentMethod ? "disabled_v1" : "v1"}`}
              size="normal"
              click={() => verifyPayment()}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default RechargeSection;
