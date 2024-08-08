import React from "react";
import Image from "next/image";
import useStore from "@/store/store";

const Navbar = () => {
  const { showPaymentScreen, setShowPaymentScreen } = useStore();
  const items = ["Inicio", "Resultados y Botes", "Quiénes Somos", "Ayuda"];

  return (
    <nav className="flex flex-col justify-center">
      <div className="flex items-center justify-center gap-1 xs:gap-4 sm:hidden">
        <Image
          style={{ width: 24, height: 24 }}
          className={`cursor-pointer drop-shadow-none shadow-none ${
            !showPaymentScreen ? "hidden" : ""
          }`}
          src="/icons/arrow_left_white.svg"
          alt="arrow_left_white"
          width={24}
          height={24}
          onClick={() => setShowPaymentScreen(false)}
        />
        <p className="font-semibold text-white">Gestión de Saldo</p>
      </div>
      <ol className="hidden gap-4 pl-2 font-normal border-l-2 sm:flex border-l-white">
        {items.map((item, index) => (
          <li
            className="text-sm font-medium text-white transition cursor-pointer hover:text-primary_hover all active:text-primary_pressed"
            key={index}>
            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;
