import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Footers from "../Footer";
import { FaHeart, FaRegHeart, FaRegStar, FaStar, FaThumbsUp } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeSingle from "./RecipeSingle";

const ViewDetails = () => {
  const {id} = useLoaderData()
  
  const [data, setData] = useState([])
  const [bannerData, setBannerData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/view')
    .then(res => res.json())
    .then(datas => setData(datas))
  },[])

  useEffect(() => {
    fetch('http://localhost:3000/cards')
    .then(res => res.json())
    .then(datas => setBannerData(datas))
  },[])



  const singleData = data.filter(x => x.category_id == id)
  const banners = bannerData.find(x => x.id == id)

  

  return (
    <div className="">
         <div className=" w-full">
        <div className="relative bg-[url('https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?w=740&t=st=1683009318~exp=1683009918~hmac=578de1c94b0119d3208fc285ed2a59668f9433653cc96d96251356a6841fb364')] bg-cover bg-right">
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                  Your favorite dishes, right at your door
                </h1>
                
                <p className="mt-8 text-gray-700 lg:w-10/12">
                  Sit amet consectetur adipisicing elit.{" "}
                  <a href="#" className="text-yellow-700">
                    connection
                  </a>{" "}
                  tenetur nihil quaerat suscipit, sunt dignissimos.
                </p>
                <p className="text-xl mt-2 text-gray-700 font-semibold mb-2">
              Experience
            </p>
            <p className="text-base text-gray-400 font-normal">
              recipe available
            </p>
            <Rating className="text-orange-300"
              placeholderRating={5.0}
              emptySymbol={
                <FaRegStar/>
              }
              placeholderSymbol={
                <FaStar/>
              }
              fullSymbol={
                <FaStar/>
              }
            /> 5.0
            <p className=" flex items-center gap-2 mt-3"> <FaThumbsUp/> 89034</p>
              </div>
              <div className="ml-auto lg:w-6/12">
                
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="grid mx-auto grid-cols-3 my-6 max-w-[1240px]">
  {
    singleData.map(x => <RecipeSingle card={x}></RecipeSingle>)
  }
</div>
      <Footers></Footers>
</div>
  );
};

export default ViewDetails;
