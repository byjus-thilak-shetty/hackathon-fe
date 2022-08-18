import { useState } from "react";
import { Link } from "react-router-dom";
import Parking from "./Parking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Choose one :</h1>
      <Link to="/User">
        <button
          style={{ width: "200px", height: "30px" }}
          onClick={console.log("Clicked")}
        >
          Enter user details
        </button>
      </Link>
      <br />
      <br />
      <Link to="/parking">
        <button style={{ width: "200px", height: "30px" }}>
          Park the Vehicle
        </button>
      </Link>
      <br />
      <br />
      <Link to="/getVehicle">
        <button style={{ width: "200px", height: "30px" }}>
          Get your Vehicle
        </button>
      </Link>
    </div>
  );
};

export default Home;
