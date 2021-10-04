import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomeService from "./HomeService";
import img from "../images/homeimage.jpg";
import "./Home.css";

function Home() {
  const [Service, setService] = useState([]);

  useEffect(() => {
    fetch("data1.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container mt-3">
      <Header></Header>
      <div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h3>Welcome to Infinity IT Institute</h3>
            <p>
              Creative IT Institute, one of the leading IT training institutes
              in Bangladesh offers the best training opportunities. It has been
              playing a vital role to eradicate the unemployment problem since
              2008. Enriched with quality training this institute has never
              failed to help the individuals to reveal their talents making
              harmony between creativity and IT
            </p>
            <button className="my-button btn btn-primary rounded-pill fs-5 fw-bold w-50">
              More Info
            </button>
          </div>
          <div className="col-md-6 move">
            <img className="" src={img} alt="" srcSet="" />
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center">Our Services</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
          {Service.map((ser) => (
            <HomeService service={ser} key={ser.id}></HomeService>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
