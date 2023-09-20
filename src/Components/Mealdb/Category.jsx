import { NavLink } from "react-router-dom";
import "./Category.css";
/* eslint-disable react/prop-types */
const Category = ({ category }) => {
  const { strCategory } = category;

  return (
    <nav id="link">
      <NavLink to={`/catergorDetails/${strCategory}`}>
        <button className="px-4 py-1 bg-gray-200 rounded-md text-black font-medium">
          {strCategory}
        </button>
      </NavLink>
    </nav>
  );
};

export default Category;
