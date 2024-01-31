import React from "react";
import { logan, pullUp } from "../data";

function Landing() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row  ">
          <img src={logan} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Get Built, with Logan</h1>
            <p className="py-6">
              Logan delivers a dynamic fitness experience focused on strength
              and performance. He is supportive, and will help you become the
              strongest version of yourself!
            </p>
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
          </div>
          <img src={pullUp} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../src/images/deadliftLg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Now Is The Time</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
