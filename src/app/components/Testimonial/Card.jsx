import Image from "next/image";
import React from "react";

const Card = ({ item, id }) => {
  return (
    <div className="bg-white py-8 pl-10 text-start rounded-3xl space-y-4">
      <div>
        <Image  width={80} height={80} src={`/t${id}.svg`} alt="person"></Image>
      </div>
      <div className="space-y-2">
        <p className="text-[#333] font-semibold text-xl">{item?.qote}</p>
        <p className="text-sm  text-black/70">{item?.dis}</p>
        <div style={{marginTop : "20px"}}>
        <p className="text-sm text-[#007E85] font-semibold  ">{item?.name}</p>
        <p className="text-sm text-[#555555]  ">{item?.desic}</p>
        </div>
       
      </div>
      
    </div>
  );
};

export default Card;

// text-[#007E85]