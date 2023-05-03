import React from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import Rating from "react-rating";
const RecipeSingle = ({ card }) => {
  const { image, recipe_name, cooking_method, rating } = card;
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-80" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipe_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="badge ml-0 mt-3">Cooking method</div>
          <p className="border-y-2 border-gray-50 py-3">
            {cooking_method.slice(0, 150)}
          </p>

          <div className="card-actions justify-end">
            <Rating
              className="text-orange-300"
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />{" "}
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
