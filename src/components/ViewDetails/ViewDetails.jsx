import React from "react";
import Banner from "./Banner";
import Footers from "../Footer";

const ViewDetails = () => {
  return (
    <div className="">
        <Banner></Banner>

<div className="grid mx-auto grid-cols-3 my-6">
<div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src="https://farm66.static.flickr.com/65535/49773343611_4f8a8e6bfe_c.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://farm66.static.flickr.com/65535/49773343611_4f8a8e6bfe_c.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://farm66.static.flickr.com/65535/49773343611_4f8a8e6bfe_c.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</div>
      <Footers></Footers>
    </div>
  );
};

export default ViewDetails;
