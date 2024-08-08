import React from "react";
import Image from "next/image";
import FooterLink from "./footer-link";
import {
  interestLinks1,
  interestLinks2,
  otherLinks,
  legalTexts,
  contacts,
  socials,
  sellos,
  payments,
  navigation,
} from "../data/link-data";

const Footer = () => {
  return (
    <footer>
      <section className="justify-between hidden w-full h-auto gap-8 px-8 -mt-8 bg-black md:flex ">
        <div className="flex ">
          <Image
            src={"/images/group_logo.svg"}
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col h-full  gap-4 w-[25%] py-8">
          <h2 className="text-lg font-bold text-white">Links de Interés</h2>
          <div className="flex justify-between w-full h-24 gap-1 ">
            <div className="flex flex-col w-full h-full gap-2 justify-evenly ">
              {interestLinks1.map(({ id, text, href }) => {
                return <FooterLink key={id} text={text} href={href} />;
              })}
            </div>
            <div className="flex flex-col w-full h-full justify-evenly ">
              <div className="flex flex-col w-full h-full gap-2 justify-evenly ">
                {interestLinks2.map(({ id, text, href }) => {
                  return <FooterLink key={id} text={text} href={href} />;
                })}
              </div>
            </div>
          </div>
          <h2 className="text-lg font-bold text-white">Otros Links</h2>
          <div className="flex flex-col justify-between w-full h-48">
            <div className="flex flex-col w-full h-full gap-2 justify-evenly ">
              {otherLinks.map(({ id, text, href }) => {
                return <FooterLink key={id} text={text} href={href} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full  gap-4 w-[25%] py-8">
          <h2 className="text-lg font-bold text-white">
            Confianza y Seguridad
          </h2>
          <h2 className="my-2 text-sm font-normal text-white ">
            Sellos de Confianza
          </h2>
          <div className="flex flex-wrap gap-2">
            {sellos.map(({ id, name, imgSrc, href }) => {
              return (
                <div className="flex gap-2" key={id}>
                  <Image
                    style={{
                      height: "2rem",
                      maxHeight: "2rem",
                      width: "100%",
                    }}
                    src={imgSrc}
                    alt={name}
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
          </div>
          <h2 className="my-2 text-sm font-normal text-white ">
            Métodos de Pago
          </h2>
          <div className="flex flex-wrap gap-2">
            {payments.map(({ id, name, imgSrc, href }) => {
              return (
                <div className="flex" key={id}>
                  <Image
                    style={{
                      height: "2rem",
                      minHeight: "2rem",
                      maxHeight: "2rem",
                      width: "100%",
                      minWidth: "100%",
                    }}
                    src={imgSrc}
                    alt={name}
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col h-full  gap-4 w-[25%] py-8">
          <h2 className="text-lg font-bold text-white">Textos Legales</h2>
          <div className="flex justify-between w-full h-24 gap-1 ">
            <div className="flex flex-col w-full h-full justify-evenly ">
              <div className="flex flex-col w-full h-full gap-2 justify-evenly ">
                {legalTexts.map(({ id, text, href }) => {
                  return <FooterLink key={id} text={text} href={href} />;
                })}
              </div>
            </div>
          </div>
          <h2 className="text-lg font-bold text-white">Contacto</h2>
          <div className="flex flex-col justify-between w-full h-48">
            <div className="flex flex-col w-full h-full gap-2 justify-evenly ">
              {contacts.map(({ id, text, href }) => {
                return <FooterLink key={id} text={text} href={href} />;
              })}
            </div>
            <div className="flex justify-start mt-2">
              <p className="text-[11px] font-normal whitespace-nowrap w-min mt-1 text-white">
                Síguenos en:
              </p>
              <div className="flex">
                {socials.map(({ id, name, imgSrc, href }) => {
                  return (
                    <div key={id}>
                      <Image
                        style={{
                          height: "1.7rem",
                          width: "1.7rem",
                        }}
                        src={imgSrc}
                        alt={name}
                        width={26}
                        height={26}
                        className="ml-4 cursor-pointer"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fixed bottom-0 w-full h-16 bg-white md:hidden">
        <div className="z-10 flex items-center justify-center w-full h-full gap-16 px-8 bg-white border border-white">
          {navigation.map(({ id, name, imgSrc, href }) => {
            return (
              <div
                key={id}
                className="z-20 flex flex-col items-center justify-center w-16 h-full border border-white cursor-pointer ">
                <Image src={imgSrc} alt={name} width={32} height={32} />
                <p className="opacity-[0.7] text-secondary font-medium">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
