import React from "react";
import { logan, pullUp } from "../data";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={logan} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Get Built, with Logan</h1>
            <p className="py-6">
              Logan delivers a dynamic fitness experience focused on strength
              and performance. He is supportive, and will help you become the
              strongest version of yourself!
            </p>
            <button className="btn btn-primary">
              <NavLink to="/options">Get Started</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-blue-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">
              Train Better, Train with Attitude!
            </h1>
            <p className="py-6">
              Whether you’re looking for guidance, accountability, or assistance
              with goal setting, personal training is great for people of all
              ages and fitness levels
            </p>
            <button className="btn btn-primary">
              <NavLink to="/options">Get Started</NavLink>
            </button>
          </div>
          <img src={pullUp} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
    </>
  );
}

export default Landing;
