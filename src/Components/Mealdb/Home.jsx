import { Outlet, useNavigation } from "react-router-dom";
import Category from "./Category";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MealNum from "./MealNum";

const Home = () => {
  const data = useLoaderData();
  const spinner = useNavigation();
  return (
    <div className="max-w-screen-2xl text-center mx-auto px-4 py-3">
      <Navbar />
      <Hero />
      <hr />
      <MealNum/>
      <hr />
      <div className="flex justify-center mx-auto flex-wrap gap-4 my-4 ">
        {data.categories.map((category) => (
          <Category key={category.idCategory} category={category} />
        ))}
      </div>
      {spinner.state === "loading" ? (
        <span className="loading loading-bars loading-lg my-20 text-[#ffffff] font-extrabold"></span>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Home;
