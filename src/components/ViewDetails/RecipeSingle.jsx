import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
    FaBookmark,
  FaHeart,
  FaRegBookmark,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import Rating from "react-rating";
import LazyLoad from "react-lazy-load";
const RecipeSingle = ({ card }) => {
  const { image, recipe_name, cooking_method, rating, ingradeiance } = card;

  const [open, setOpen] = useState(false)

  if (open) {
    toast('the recipe is your favorite')
}
  return (
    <div className="mx-auto">
      <div className="card w-96 mt-3 bg-base-100 shadow-xl">
        <figure>
          <LazyLoad><img src={image} className="h-80" alt="Shoes" /></LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipe_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="border-2 rounded-md border-gray-100 p-3">
          <div className="badge ml-0 mt-3">Ingradeiance</div>
          <div className="mt-2 font-semibold justify-start text-start"><h1>1. {ingradeiance[0]} </h1> <h1>2. {ingradeiance[1]}</h1> <h1>3. {ingradeiance[2]}</h1> <h1>4. {ingradeiance[3]}</h1> <h1>5. {ingradeiance[4]}</h1></div>
          </div>

          <div className="badge ml-0 mt-3">Cooking method</div>
          <p className="border-y-2 border-gray-50 py-3">
            {cooking_method.slice(0, 150)}
          </p>
          <div className="card-actions flex justify-between">

          
          <>{!open ? <FaRegHeart onClick={() => setOpen(true)}/> : <FaHeart/> }   </>

            <div className=""><Rating
              className="text-orange-300"
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />{" "}
            {rating}</div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default RecipeSingle;
