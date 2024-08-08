import React from "react";
import Sidebar from "./sidebar";
import useStore from "@/store/store";
import Image from "next/image";
import PrimaryButton from "./primary-button";

const PostPaymentSection = ({ oldBalance, newBalance }) => {
  const { setShowPaymentScreen } = useStore();

  return (
    <section className="w-full h-[60rem] flex px-8 mb-[10vh]">
      <div className="md:w-[70%] w-[100%] h-full px-0  sm:px-8 py-1 sm:py-8 my-8 lg:mr-16">
        <div className="flex w-full h-8 gap-2 ">
          <div className="flex flex-col justify-center w-auto ">
            <Image
              style={{ width: 24, height: 24 }}
              src="/icons/checkmark.svg"
              alt="logo"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-xl font-bold">¡Saldo Añadido!</h1>
          </div>
        </div>
        <p className="my-2 text-sm font-medium text-black">
          Tu saldo ya está añadido y puedes usarlo para realizar tus compras.
          ¿Listo para ganar?
        </p>

        <div className="flex items-center justify-center w-full h-32 gap-2 my-4 ">
          <div className="flex flex-col items-center justify-center w-24 h-12 ">
            <h1 className="text-sm font-medium">{oldBalance}</h1>
            <p className="text-sm font-medium">Antes</p>
          </div>
          <div className="flex items-center justify-center w-24 h-12 ">
            <Image
              style={{ width: 24, height: 24 }}
              src="/icons/arrow_right.svg"
              alt="arrow_right_ico"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-24 h-12 ">
            <h1 className="text-xl font-bold text-success_primary">
              {newBalance}
            </h1>
            <p className="text-sm font-medium">Ahora</p>
          </div>
        </div>
        <div className="flex justify-end w-full h-12 my-4">
          <div className="w-full sm:min-w-[10rem] sm:w-[10rem]">
            <PrimaryButton
              style="v1"
              text="Ir A Inicio"
              click={() => setShowPaymentScreen(false)}
            />
          </div>
        </div>

        <div className="w-full h-auto">
          <Image
            style={{ width: "100%", height: "auto" }}
            src="/images/banner.png"
            alt="banner"
            width={2000}
            height={2000}
          />
        </div>
      </div>
      <Sidebar />
    </section>
  );
};

export default PostPaymentSection;
