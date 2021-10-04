import React from "react";
import Header from '../header/Header'
import Footer from '../footer/Footer'
function Contact() {
  return (
    <div>
      <div className="container mt-3 ">
        <Header></Header>
        <h1 className="text-center text-primary">Get In Touch</h1>
        <form className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded">
          <div class="form-group">
            <label for="formGroupExampleInput" className="fs-3 fw-bold">Name</label>
            <input
              type="text"
              class="form-control fs-5"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2"  className="fs-3 fw-bold">E-mail</label>
            <input
              type="text"
              class="form-control fs-5"
              id="formGroupExampleInput2"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2"  className="fs-3 fw-bold">Phone</label>
            <input
              type="text"
              class="form-control fs-5"
              id="formGroupExampleInput2"
              placeholder="Phone Number"
            />
          </div>
          <button className="btn btn-primary fw-bold w-100 mt-3">Submit</button>
        </form>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Contact;
