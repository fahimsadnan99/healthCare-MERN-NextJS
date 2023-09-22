import Image from "next/image";
import React from "react";

const Card = ({ item, id }) => {
  return (
    <div className="bg-white py-10 text-center rounded-3xl space-y-4">
      <div>
        <Image className="mx-auto" width={80} height={80} src={`/p${id}.svg`} alt="person"></Image>
      </div>
      <div className="space-y-2">
        <p className="text-[#007E85] font-semibold text-xl">{item?.name}</p>
        <p className="text-sm font-semibold text-black/70">{item?.desic}</p>
        <p className="text-sm text-[#555555] px-8  text-center">{item?.des}</p>
      </div>
      <div className="space-x-5 my-36">
        <button>
          <Image src={"/fb.svg"} width={28} height={28} alt="social"></Image>
        </button>
        <button>
          <Image src={"/ins.svg"} width={28} height={28} alt="social"></Image>
        </button>
        <button>
          <Image src={"/tw.svg"} width={28} height={28} alt="social"></Image>
        </button>
        <button>
          <Image src={"/linkdin.svg"} width={28} height={28} alt="social"></Image>
        </button>
      </div>
    </div>
  );
};

export default Card;
