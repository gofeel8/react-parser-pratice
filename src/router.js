import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SurveyPage from "./pages/SurveyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hellod World</h1>
      </div>
    ),
  },
  {
    path: ":service/survey/:page",
    element: <SurveyPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
