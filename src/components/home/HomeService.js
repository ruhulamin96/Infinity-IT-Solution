import React from "react";
import './Home.css'
function HomeService(props) {
  const { title, img, desc,price} = props.service;
  return (
    <div>
      <div className="col shadow">
        <div className="card h-100">
          <img src={img} className="card-img-top my-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{desc}</p>
            <h3 className="card-title">Price: $<span>{price}</span></h3>
            <button className="btn btn-primary w-100 fw-bold">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
