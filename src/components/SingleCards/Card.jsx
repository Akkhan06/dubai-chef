import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { chef_name, id, experience, rating, chef_image, num_recipes, likes } =
    card;
    console.log(card)
  return (
    <div>
      <div className="">
        <div className="w-full border-2 border-gray-50 px-1 bg-white rounded-lg sahdow-lg overflow-hidden">
          <div>
            <img
              className="object-center object-cover h-80 w-full"
              src={chef_image}
              alt="photo"
            />
          </div>
          <div className="sm:py-6 border-b-2 border-gray-200">
            <p className="text-xl text-gray-700 font-bold mb-2">
              {chef_name}
            </p>
            <p className="text-xl text-gray-700 font-semibold mb-2">Experience {experience}</p>
            <p className="text-base text-gray-400 font-normal">
              recipe available {num_recipes}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to="/view">
              <button className="btn btn-outline btn-accent mt-2">
                view recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
