/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { idMeal ,strMeal, strMealThumb } = item;
  console.log(idMeal);
  return (
    <div className="cursor-pointer mx-auto w-full mt-4">
    <Link to={`/${idMeal}`}>
      <img title="Click to see details" src={strMealThumb} alt="" className="rounded" />
        </Link>
      <h1 className="font-bold mt-2 text-lg text-[#e17055]">
        {strMeal.slice(0, 30)}
      </h1>
      
    </div>
  );
};

export default Card;
