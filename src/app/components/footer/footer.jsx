import Image from "next/image";
import React from "react";

const list = [
  {
    title: "Product",
    subList: ["Features", "Pricing", "Case studies", "Reviews", "Updates"],
  },
  {
    title: "Company",
    subList: ["About", "Contact us", "Careers", "Culture", "Blog"],
  },
  {
    title: "Support",
    subList: ["Getting started", "Help center", "Server status", "Report a bug", "Chat support"],
  },
  {
    title: "Follow us",
    subList: Array(5).fill(0),
  },
];

const footer = () => {
  return (
    <div className="bg-[#007E85] text-white py-10">
      <div className="sm:mx-[10px] md:mx-[20px]  lg:mx-[100px] mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
        space-y-5 xl:space-y-0
        ">
          <div className="col-span-2 px-5 xl:px-10">
            <Image src={"./LogoFooter.svg"} alt="logo" width={200} height={200}></Image>

            <p>Copyright © 2022 BRIX Templates | All Rights Reserved </p>
          </div>

          {list.map((item, index) => {
            return (
              <div className="mx-5 xl:mx-0">
                <p className="font-semibold">{item?.title}</p>

                {item?.subList.map((menu, ind) => {
                  return (
                    <div className="text-sm mt-1">
                      {index !== 3 ? (
                        <button>{menu}</button>
                      ) : (
                        
                        <Image
                          src={`/footerS${ind + 1}.svg`}
                          alt="footerSocial"
                          width={80}
                          height={80}
                          className="mt-2"
                        ></Image>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default footer;
