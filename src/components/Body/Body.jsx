import React from "react";
import Category from "./category";

const Body = () => {
  return (
    <div>

      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://img.freepik.com/free-photo/top-view-arab-dish_23-2147794276.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Roasted Butternut Squash and Sage Risotto with Crispy Pancetta
              </h2>
              <p className="mt-6 text-gray-600">
              This Roasted Butternut Squash and Sage Risotto with Crispy Pancetta recipe is the perfect comfort food for chilly evenings. The creamy risotto is infused with fragrant sage and roasted butternut squash, while the crispy pancetta adds a delicious crunch to each bite.
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                This dish is easy to prepare and will impress your dinner guests. It's a great vegetarian option, but you can also add chicken or shrimp for extra protein. Whether you're a seasoned chef or a novice cook, this recipe is sure to become a favorite in your household.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
