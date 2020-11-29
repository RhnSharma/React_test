import React from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../images/notfound.svg";
import { IoIosArrowBack } from "react-icons/io";
import "./../App.css";

const NotFound = () => (
  <div style={{ minHeight: "80vh" }} className="mt-5">
    <center>
      <img
        src={ErrorPage}
        className="img-fluid notfound mt-5"
        alt="Page not found!"
      />
    </center>
    <br />
    <center>
      <Link to="/" style={{ textDecoration: "none" }}>
        <IoIosArrowBack />
        Return to Home Page
      </Link>
    </center>
  </div>
);

export default NotFound;
