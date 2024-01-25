import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <main className="grid min-h-screen place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">There was an error...</h4>
    </main>
  );
};

export default Error;
