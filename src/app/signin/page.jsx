"use client"

import React,{useState} from "react";

import { useRouter } from 'next/navigation'


import { signIn } from "next-auth/react";

let list = ["email", "password"];

const page = () => {
 
  const router = useRouter()
  let [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault()
   
  console.log(userInfo);

 

    

  };


  
  return (
    <div className="w-full">
      <div className="px-96 mx-auto mt-10">
        <div>
          <p className="text-6xl text-center border-b-2 pb-7">SignIn</p>
          <div className="justify-center items-center text-center">
            <form>
            {list?.map((item) => {
              return (
                <input
                  onChange={handleChange}
                  key={item}
                  type={item == "password" ? "password" : "text"}
                  name={item}
                  className="ring-2 w-[550px] mx-auto block mt-5 font-2xl p-4"
                  placeholder={`Enter Your ${item}`}
                />
              );
            })}

            <button
              onClick={handleSubmit}
              className="text-2xl text-white  bg-purple-800 p-3 mt-5"
              disabled={!userInfo.email && !userInfo.password}
              type="Submit"
            >
              SignIn
            </button>

           
            </form>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;