import React, { useContext } from "react";
import { userContext } from "../../App";
import HomeService from "../home/HomeService";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Services() {
  const services = useContext(userContext);

  return (
    <div className="container mt-3">
      <Header></Header>
      <h1 className="text-center ">Our Services</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {services.map((ser) => (
          <HomeService service={ser} key={ser.id}></HomeService>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Services;
