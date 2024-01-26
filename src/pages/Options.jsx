import React from "react";

import { Prices } from "../components";

const Options = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Select the plan that meets your goals. No hidden fees!
          </p>
        </div>
        <Prices />
      </div>
    </div>
  );
};

export default Options;
