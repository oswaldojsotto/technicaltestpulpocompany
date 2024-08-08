import React, { useState } from "react";
import RechargeSection from "./recharge-section";
import RetirePrizeSection from "./retire-section";
import Sidebar from "./sidebar";

const PrePaymentSection = () => {
  const [activeTab, setActiveTab] = useState(0); // 1 = activo, 0 = inactivo

  const handleChangeTab = tab => {
    setActiveTab(tab);
  };

  return (
    <section className="w-full h-[60rem] flex sm:px-8 mb-[10vh]">
      <div className="md:w-[70%] w-[100%] h-full px-0  sm:px-8 py-1 sm:py-8 lg:mr-16">
        <p className="hidden text-xl font-bold text-black sm:flex">
          Gestión de Saldo
        </p>
        <div className="flex justify-between w-full sm:justify-start ">
          <button
            onClick={() => handleChangeTab(0)}
            className={`p-2 text-md font-medium text-black transition-all border-b-2 w-full sm:w-auto text-md  hover:bg-primary_20 ${
              activeTab === 0 ? "border-primary_pressed" : "border-white"
            }`}>
            Recargar Saldo
          </button>
          <button
            onClick={() => handleChangeTab(1)}
            className={`p-2 text-md font-medium text-secondary opacity-[0.7] transition-all border-b-2 w-full sm:w-auto  text-md  hover:bg-primary_20 ${
              activeTab === 1 ? "border-primary_pressed" : "border-white"
            }`}>
            Retirar Premios
          </button>
        </div>
        <div className="w-full h-full transition-all">
          {activeTab === 0 ? <RechargeSection /> : <RetirePrizeSection />}
        </div>
      </div>
      <Sidebar />
    </section>
  );
};

export default PrePaymentSection;
