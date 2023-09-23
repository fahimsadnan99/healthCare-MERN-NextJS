"use client";
import React, { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";

const Accrodion = ({id}) => {
  const [isActive, setIsActive] = useState({
    active: false,
    id: "",
  });

 
  return (
    <div className="accrodion mx-auto">
      <div
        className="flex justify-start items-center space-x-1"
        onClick={() =>
          setIsActive({
            active: !isActive.active,
            id: !isActive.active ? id : "",
          })
        }
      >
        {(isActive.active && isActive.id == id )? (
          <IoIosArrowDropdown className="text-2xl text-[#007E85]"></IoIosArrowDropdown>
        ) : (
          <IoIosArrowDropright className="text-2xl text-[#007E85] "></IoIosArrowDropright>
        )}

        <p className="title text-[#111] font-semibold text-base lg:text-lg cursor-pointer">
          The quick fox jumps over the lazy dog
        </p>
      </div>

      {(isActive.id === id && isActive.active) && (
        <div
          className={` cursor-pointer  conentActive ${isActive.active == false && "content"}`}
          onClick={() =>
            setIsActive({
              active: !isActive.active,
              id: !isActive.active ? id : "",
            })
          }
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, facilis porro quae nihil
          temporibus nemo, tempora quos totam dolore pariatur dolorem excepturi itaque voluptate!
          Inventore, nihil fugit. Aut, perferendis ipsam.
        </div>
      )}
    </div>
  );
};

export default Accrodion;
