import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Mealdb/Home.jsx";
import CatergoryLoader from "./Components/Mealdb/CatergoryLoader";
import ErorrPage from "./Components/Mealdb/ErorrPage";
import CarddetailsLoad from "./Components/Mealdb/CarddetailsLoad";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    element: <Home />,
    errorElement: <ErorrPage />,
    children: [
      {
        path: "/catergorDetails/:strCategory",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`
          ),
        element: <CatergoryLoader />,
      },
      {
        path:'/:idMeal',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <CarddetailsLoad/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
