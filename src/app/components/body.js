"use client";
import React, { useState } from "react";
import useStore from "@/store/store";
import useCurrencyFormat from "@/hooks/useCurrencyFormat";
import PostPaymentSection from "./post-payment-section";
import PrePaymentSection from "./pre-payment-section";

const Body = () => {
  const { showPaymentScreen } = useStore();
  const { oldBalance } = useStore();
  const { balance } = useStore();

  const formattedOldBalance = useCurrencyFormat(oldBalance, true);
  const formattedNewBalance = useCurrencyFormat(balance, true);

  return (
    <div>
      {!showPaymentScreen ? (
        <PrePaymentSection />
      ) : (
        <PostPaymentSection
          oldBalance={formattedOldBalance}
          newBalance={formattedNewBalance}
        />
      )}
    </div>
  );
};

export default Body;
