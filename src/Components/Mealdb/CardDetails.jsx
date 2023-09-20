import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardDetails = ({ item }) => {
  const {
    idMeal,
    strMeal,
    strArea,
    strCategory,
    strTags,
    strMealThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
  } = item;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="text-[#f39c12] flex-col flex md:flex-row justify-center">
      <div className="mt-8">
        <img src={strMealThumb} className="rounded w-[350px] mx-auto" alt="" />
        <h1 className="md:text-left text-white text-center text-2xl mt-4">
          {strMeal}
        </h1>
        <h2 className="text-lg mt-2 md:text-left text-center">
          {strTags && "#" + strTags?.replace(",", "  #")}{" "}
          <span>
            <h1>Meal Id: {idMeal}</h1>
          </span>
          <span>
            <h1>Meal Area: {strArea}</h1>
          </span>
          <span>
            <h1>Meal Category: {strCategory}</h1>
          </span>
          <button
            onClick={goBack}
            className="w-[100px] px-6 py-1 rounded mt-3 text-white btn-primary"
          >
            Back
          </button>
        </h2>
      </div>
      <div className="text-left mt-8 md:w-[70%] px-6 md:px-10 mx-auto">
        <h1 className="md:text-3xl text-2xl font-bold text-white text-center mb-4">
          Instruction
        </h1>
        <p className="text-sm text-white">{strInstructions}</p>

        <div className="mt-10">
          <h1 className="md:text-3xl text-2xl text-center text-white font-bold">
            Ingredient
          </h1>
          <div className="grid grid-cols-4 justify-center gap-5  mt-4 capitalize md:text-base text-xs">
            <li className="text-[#f39c12]">
              {strIngredient1 && strIngredient1}
            </li>
            <li className="text-[#f39c12] ">
              {strIngredient2 && strIngredient2}
            </li>
            <li className="text-[#f39c12]">
              {strIngredient3 && strIngredient3}
            </li>
            <li className="text-[#f39c12]">
              {strIngredient4 && strIngredient4}
            </li>
            <li className="text-[#f39c12]">
              {strIngredient5 && strIngredient5}
            </li>
            <li className="text-[#f39c12]">
              {strIngredient6 && strIngredient6}
            </li>
            <li className="text-[#f39c12]">
              {strIngredient7 && strIngredient7}
            </li>
            <li className="text-[#f39c12]">
              {strIngredient8 && strIngredient8}
            </li>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="md:text-3xl text-2xl text-center text-white font-bold">
            Measure
          </h1>
          <div className="grid grid-cols-4 justify-center gap-5  mt-4 capitalize md:text-base text-xs">
            {strMeasure1 !== " " ? (
              <li className="text-[#f39c12]">{strMeasure1 && strMeasure1} </li>
            ) : (
              ""
            )}
            {strMeasure2 !== " " ? (
              <li className="text-[#f39c12]">{strMeasure2 && strMeasure2} </li>
            ) : (
              ""
            )}
            {strMeasure3 !== " " ? (
              <li className="text-[#f39c12]">{strMeasure3 && strMeasure3} </li>
            ) : (
              ""
            )}
            {strMeasure4 !== " " ? (
              <li className="text-[#f39c12]">{strMeasure4 && strMeasure4} </li>
            ) : (
              ""
            )}
            {strMeasure5 !== " " ? (
              <li className="text-[#f39c12]">{strMeasure5 && strMeasure5}</li>
            ) : (
              ""
            )}
            {strMeasure6 !== " " ? (
              <li className="text-[#f39c12]">{strMeasure6 && strMeasure6} </li>
            ) : (
              ""
            )}
            {strMeasure7 !== " " ? (
              <li className="text-[#f39c12]">{strMeasure7 && strMeasure7} </li>
            ) : (
              ""
            )}
            {strMeasure8 !== " " ? (
              <li className="text-[#f39c12]">{strMeasure8 && strMeasure8} </li>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
