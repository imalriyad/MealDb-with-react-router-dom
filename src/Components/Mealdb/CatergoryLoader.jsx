import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const CatergoryLoader = () => {
  const data = useLoaderData();
  const [isShowAll, setShowAll] = useState(false);
  let showAllCards;

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-4 text-center gap-10">
        {isShowAll === true
          ? data.meals.map((item) => {
              return <Card key={item.idMeal} item={item} />;
            })
          : (showAllCards = data.meals.slice(0, 8).map((item) => {
              return <Card key={item.idMeal} item={item} />;
            }))}
      </div>

      {showAllCards === undefined || (
        <button onClick={() => setShowAll(true)} className="btn bg-[#C52D2F] text-white hover:bg-[#C52D2F] border-0  mt-5">
          Show all
        </button>
      )}
    </div>
  );
};

export default CatergoryLoader;
