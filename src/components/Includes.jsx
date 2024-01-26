import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { prices } from "../data";

const rates = prices[1];

const {
  id: id,
  title: title,
  text: text,
  price: price,
  includes: includes,
} = rates;

const validIncludes = Object.keys(rates)
  .filter((key) => key.startsWith("includes") && rates[key] !== null)
  .map((key) => rates[key]);

const Includes = () => {
  return (
    <ul
      role="list"
      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
    >
      {validIncludes.map((item, index) => {
        return (
          <li key={item} className="flex gap-x-3">
            <CheckIcon
              className="h-6 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            {item}
            {index < validIncludes.length - 1 ? "," : ""}
          </li>
        );
      })}
    </ul>
  );
};

export default Includes;
