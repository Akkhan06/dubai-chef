import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const SingleCards = () => {
    const [categoryes, setCategoryes] = useState([])
    console.log(categoryes)
    useEffect(() => {
        fetch('https://chef-recipe-server-akkhan06.vercel.app/cards')
        .then(res => res.json())
        .then(data => setCategoryes(data))
        .catch(error => console.log(error))
    },[])
  return (
    <>
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
        Dubai has all the best food recipes and chefs
        </h2>
        <h1 className="font-bold mt-3 text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
        Meet our chefs and check out their recipes
        </h1>
    </div>
   <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 grid ">
   {
    categoryes.map(x => <Card card={x}></Card>)
   }
   </div>
</section>
    </>
  );
};

export default SingleCards;
