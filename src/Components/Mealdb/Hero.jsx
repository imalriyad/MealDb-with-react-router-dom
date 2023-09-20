
const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 items-center flex-col justify-around md:flex-row text-white flex">
      <img src="https://i.ibb.co/9ZC3NBd/meal-icon.png" alt=""  />
      <div className="flex-col text-center tracking-wide">
        <h1 className="md:text-4xl font-semibold text-3xl">
          Welcome to TheMealDB
        </h1>
        <p className="my-7 text-sm">
          Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
          around the world. We also offer a{" "}
          <span className="text-[#e17055]">free JSON API</span> for anyone
          wanting to use it, with additional features for subscribers.
        </p>
        <button>
          <img
            src="https://i.ibb.co/DgthyJT/paypal-blue.png"
            className="w-[100px] px-6 py-2 rounded bg-[#F2BA36]"
            alt=""
          />
        </button>
        <p className="text-sm mt-2">Click button above to upgrade free API to premium for $3
Currently 76 supporters</p>
      </div>

      <img className="md:block hidden" src="https://i.ibb.co/9ZC3NBd/meal-icon.png" alt="" />
    
    </div>
  );
};

export default Hero;
