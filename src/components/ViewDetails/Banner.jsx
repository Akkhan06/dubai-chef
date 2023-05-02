import React from "react";
import Footers from "../Footer";

const Banner = () => {
  return (
    <div>
      {/* <div className="hero min-h-screen w-full bg-[url('https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?w=740&t=st=1683009318~exp=1683009918~hmac=578de1c94b0119d3208fc285ed2a59668f9433653cc96d96251356a6841fb364')] bg-base-200">
  <div className="hero-content  text-center  ">
    <div className="max-w-full">
      <h1 className="text-5xl text-white font-bold">Welcome to dubai chef club</h1>
      <p className="py-6 max-w-lg mx-auto text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-success bg-yellow-400 border-0">Get Started</button>
    </div>
  </div>
</div> */}

      <div className=" w-full">
        <div className="relative bg-yellow-50">
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
              </div>
              <div className="ml-auto lg:w-6/12">
                <img
                  src="https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?w=740&t=st=1683009318~exp=1683009918~hmac=578de1c94b0119d3208fc285ed2a59668f9433653cc96d96251356a6841fb364"
                  className=""
                  alt="food illustration"
                  loading="lazy"
                  width="4500"
                  height="4500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
