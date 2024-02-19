import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { prices } from "../data";

const Includes = () => {
  return (
    <ul
      role="list"
      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
    >
      {prices.map((item) => {
        const { id, workout } = item;
        return (
          <li key={id} className="flex gap-x-3">
            <CheckIcon
              className="h-6 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            {workout}
          </li>
        );
      })}
    </ul>
  );
};

export default Includes;
