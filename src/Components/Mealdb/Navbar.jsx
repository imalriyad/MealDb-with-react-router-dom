import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const home = useNavigate();
  const handleHome = () => {
    home("/");
  };

  return (
    <div className="md:flex items-center md:justify-between text-center space-y-5 md:space-y-4">
      <img onClick={handleHome} className="cursor-pointer" src="https://www.themealdb.com/images/logo-small.png" alt="" />
      <div>
        <button
          onClick={handleHome}
          className="px-4 py-1 bg-[#C52D2F] rounded text-white font-medium"
        >
          Home
        </button>

        <button className="px-4 py-1 ml-4 bg-[#C52D2F] rounded text-white font-medium">
          Api
        </button>
        <input
          type="text"
          className="p-[9px] font-medium focus:outline-none ml-4 mt-4 md:mt-0 input-bordered rounded text-xs bg-gray-50"
          placeholder="Search for Meal"
        />
        
      </div>
    </div>
  );
};

export default Navbar;
