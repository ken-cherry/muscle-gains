import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  Options,
  GetStarted,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "options",
        element: <Options />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "getStarted",
        element: <GetStarted />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
