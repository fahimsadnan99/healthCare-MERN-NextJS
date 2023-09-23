import React from "react";
import Card from "./Card";

const testimonial = [
  {
    qote: "“An amazing service”",
    dis: "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
    name: "John Carter",
    desic: "CEO at Google",
  },
  {
    qote: "“One of a kind service”",
    dis: "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
    name: "Sophie Moore",
    desic: "MD at Facebook",
  },
  {
    qote: "“The best service”",
    dis: "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
    name: "Andy Smith",
    desic: "CEO Dot Austere",
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className="text-center space-y-3 my-16 ">
        <p className="text-[#007E85] text-3xl font-semibold">Testimonial</p>
        <p className="text-[#333]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br></br>elementum
          tempus hac tellus libero accumsan.{" "}
        </p>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-10'>
    {
        testimonial.map((item,index)=>{
     return (
        <Card item={item} id={index + 1} key={index + 1}></Card>
     )
        })
    }
</div>
    </div>
  );
};

export default Testimonial;
