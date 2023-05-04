import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Footers from "../Footer";
import {
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeSingle from "./RecipeSingle";

const ViewDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetch(`https://chef-recipe-server-akkhan06.vercel.app/cards/${id}`)
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);

  console.log(id);

  return (
    <div className="">
      <Banner data={data}></Banner>

      <div className="grid mx-auto grid-cols-3 mt-[40vh] my-6 max-w-[1240px]">
        {data?.recipes &&
          data.recipes.map((x) => (
            <RecipeSingle card={x} key={x.id}></RecipeSingle>
          ))}
      </div>
      <Footers></Footers>
    </div>
  );
};

export default ViewDetails;
