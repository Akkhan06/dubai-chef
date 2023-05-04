import React from "react";
import Footers from "../Footer";
import {BsArrowUpRight } from "react-icons/bs";
import Rating from "react-rating";

const Banner = ({data}) => {
  const { chef_name, id, experience, rating, chef_image, num_recipes, likes , bio} =
  data;

  // bg-[url('https://t4.ftcdn.net/jpg/04/89/04/65/360_F_489046512_D3W2qTasAWwtMycRQOVuQnjPFItDYxh8.webp')]

  console.log(chef_image)
  return (
    <div>
     <div className="h-full md:h-[50vh] w-full relative">
            <div className="before:content-[''] w-full h-[125vh] md:h-[75vh] relative before:absolute before:bg-[#000000bb] before:top-0 before:right-0 before:left-0 before:bottom-0">
                <img className="w-full h-full object-cover" src="https://t4.ftcdn.net/jpg/04/89/04/65/360_F_489046512_D3W2qTasAWwtMycRQOVuQnjPFItDYxh8.webp" alt="" />
            </div>

            <div className="ui-container absolute right-0 left-0 top-10 flex gap-5  items-center">
                <div className="border p-5 rounded grid grid-cols-1 md:grid-cols-4 gap-5 text-white">
                    <div className="h-[350px] w-full mx-auto">
                        <img className="h-full object-cover w-full rounded" src={chef_image} alt="" />
                    </div>
                    <div className="col-span-3">
                        <h3 className=" text-xl font-bold my-3">{chef_name}</h3>
                        <p className="font-bold my-2"> <span className="font-bold text-xl"> Experience : </span>   {experience}</p>
                        <p className="font-bold my-2"> <span className="font-bold text-xl"> Total likes : </span>  {likes}</p>
                        <p className="font-bold my-2"> <span className="font-bold text-xl"> Recipes : </span>   {num_recipes}</p>
                        <p className="font-bold mt-10"> <span className="block font-bold text-xl"> Bio : </span>  {bio}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
