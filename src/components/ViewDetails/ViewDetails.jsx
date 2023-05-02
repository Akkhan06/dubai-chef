import React from "react";
import Banner from "./Banner";
import Footers from "../Footer";

const ViewDetails = () => {
  return (
    <div>
        <Banner></Banner>
      {/* <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-50 my-12 py-4 rounded-none">
        <figure>
          <img
            src="https://farm66.static.flickr.com/65535/49773343611_4f8a8e6bfe_c.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div> */}

<div className="grid grid-cols-3 my-6">
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
