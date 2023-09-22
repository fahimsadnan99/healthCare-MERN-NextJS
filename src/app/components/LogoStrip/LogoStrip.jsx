import Image from "next/image";
import React from "react";

const LogoStrip = () => {
  return (
    <div>
      <p className="text-[#007E85] text-3xl font-semibold text-center mt-24 mb-10">
        Trusted by 10,000+ companies around the world
      </p>

      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6  gap-10'>
        {[...Array(6)].map((item, index) => {
          return <Image className="ml-10 lg:ml-0" src={`/s${index + 1}.svg`} width={100} height={50}></Image>;
        })}
      </div>
    </div>
  );
};

export default LogoStrip;
