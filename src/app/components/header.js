"use client";
import React from "react";
import useCurrencyFormat from "@/hooks/useCurrencyFormat";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import useStore from "@/store/store";

const Header = () => {
  const { showPaymentScreen, setShowPaymentScreen } = useStore();
  const { balance } = useStore();

  return (
    <div className="flex flex-col justify-center w-full px-8 ju h-14 bg-primary">
      <div className="flex justify-between">
        <Navbar />
        <section className="flex gap-4">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center w-full cursor-pointer">
              <Image
                src="/icons/user.svg"
                alt="user_icon"
                width={20}
                height={20}
              />
            </div>
            <div className="text-sm font-medium text-white">
              {useCurrencyFormat(balance, true)}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex justify-center w-full cursor-pointer">
              <Image
                src="/icons/cart.svg"
                alt="user_icon"
                width={26}
                height={26}
              />
            </div>
            <div className="flex justify-center w-full cursor-pointer sm:hidden">
              <Image
                src="/icons/close_white.svg"
                alt="user_icon"
                width={26}
                height={26}
                onClick={() => setShowPaymentScreen(false)}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
