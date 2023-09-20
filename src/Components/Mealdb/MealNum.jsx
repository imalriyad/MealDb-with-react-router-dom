const MealNum = () => {

  return (
    <div>
      <div className="my-2 text-xs md:text-base gap-6 flex text-white justify-center">
        <p className="items-center flex">
          <img
            src="https://www.themealdb.com/images/icons/meal-icon6.png"
            className="mr-1"
            alt=""
          />
          <span className="font-medium">Total Meals: 294</span>
        </p>
        <p className="items-center flex">
          <img
            src="https://www.themealdb.com/images/icons/meal-icon4.png"
            className="mr-1"
            alt=""
          />
          <span className="font-medium"> Total Ingredients: 574</span>
        </p>
        <p className="items-center flex">
          <img
            src="https://www.themealdb.com/images/icons/image2.png"
            className="mr-1"
            alt=""
          />
          <span className="font-medium">Total Images: 294</span>
        </p>
      </div>
    </div>
  );
};

export default MealNum;
