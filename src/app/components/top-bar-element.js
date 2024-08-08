import React from "react";
import Image from "next/image";
import useCurrencyFormat from "@/hooks/useCurrencyFormat";

const TopElement = ({ title, ammount }) => {
  return (
    <div className="flex flex-col justify-center p-2 my-2 rounded-md cursor-pointer select-none hover:bg-primary_20">
      <div className="flex justify-center w-full h-full select-none">
        <Image
          style={{
            width: "auto",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
          src="/icons/euromillones.svg"
          alt="euromillones"
          width={30}
          height={30}
        />
      </div>
      <h2 className="flex justify-center text-xs font-normal">{title}</h2>
      <h2 className="flex justify-center text-xs font-medium">
        {useCurrencyFormat(ammount, false)}
      </h2>
    </div>
  );
};

export default TopElement;
