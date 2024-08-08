import React from "react";
import PrimaryButton from "./primary-button";
import useStore from "@/store/store";
import useCurrencyFormat from "@/hooks/useCurrencyFormat";
import Image from "next/image";
import { account, history, help } from "../data/sidebar-data";

const Sidebar = () => {
  const { balance } = useStore();

  return (
    <div className="hidden h-full p-1 max-w-[30%] w-[30%] min-w-[16rem]  md:block  ">
      <section className="flex flex-col w-full h-24 ">
        <div className="flex items-center justify-between w-auto h-12 px-0 lg:px-2">
          <p className="ml-1 font-semibold text-md lg:ml-0">Oswaldo Sotto</p>
          <p className="items-center h-auto px-2 py-1 text-xs font-semibold rounded-sm bg-warning_default ">
            Saldo: {useCurrencyFormat(balance, true)}
          </p>
        </div>
        <div className="flex w-full gap-2 size-auto">
          <div className="flex w-[50%] scale-[0.9]  ">
            <PrimaryButton
              className="text-sm size-auto text-[7px] md:text-[12px] -pl-1 w-full"
              text="Retirar Premios"
              style="v2"
            />
          </div>
          <div className=" flex w-[50%] scale-[0.9] ">
            <PrimaryButton
              className="text-sm size-auto text-[7px] md:text-[12px] -pl-1 w-full"
              text="Recargar Saldo"
              style="v1"
            />
          </div>
        </div>
      </section>
      <div className=" h-[9rem]  bg-white my-8 px-3">
        <p className="text-sm font-bold">Mi Cuenta</p>
        {account.map(({ id, iconSrc, text, link }) => (
          <div key={id} className="flex gap-2 px-1 py-2 ">
            <a className="flex gap-2" href={link}>
              <Image
                className="cursor-pointer"
                style={{ width: "auto", height: "auto" }}
                src={iconSrc}
                alt={text}
                width={16}
                height={16}
              />
              <p className="text-[13px] font-medium cursor-pointer pt-[2px]">
                {text}
              </p>
            </a>
          </div>
        ))}
      </div>
      <div className=" h-[9rem]  bg-white my-8 px-3">
        <p className="text-sm font-bold">Historial</p>
        {history.map(({ id, iconSrc, text, link }) => (
          <div key={id} className="flex gap-2 px-1 py-2">
            <a className="flex gap-2" href={link}>
              <Image
                className="cursor-pointer"
                style={{ width: "auto", height: "auto" }}
                src={iconSrc}
                alt={text}
                width={16}
                height={16}
              />
              <p className="text-[13px] font-medium cursor-pointer pt-[2px]">
                {text}
              </p>
            </a>
          </div>
        ))}
      </div>
      <div className=" h-[9rem]  bg-white mt-8 px-3">
        <p className="text-sm font-bold">Ayuda y Contacto</p>
        {help.map(({ id, iconSrc, text, link }) => (
          <div key={id} className="flex gap-2 px-1 py-2">
            <a className="flex gap-2" href={link}>
              <Image
                className="cursor-pointer"
                style={{ width: "auto", height: "auto" }}
                src={iconSrc}
                alt={text}
                width={16}
                height={16}
              />
              <p className="text-[13px] font-medium cursor-pointer pt-[2px]">
                {text}
              </p>
            </a>
          </div>
        ))}
      </div>
      <section>
        <div className="flex items-center justify-center gap-2 px-1 ">
          <Image
            className="flex items-center justify-center cursor-pointer mt-[2px]"
            style={{ width: 16, height: 16 }}
            src={`/icons/power.svg`}
            alt="power_ico"
            width={16}
            height={16}
          />
          <p className="text-[13px]  text-secondary font-normal cursor-pointer pt-[2px] my-2 underline">
            Cerrar Sesión
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
