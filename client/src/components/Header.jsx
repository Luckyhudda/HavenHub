import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-violet-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mxauto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex-wrap ">
            <span className="text-gray-700 ">Haven</span>
            <span className="text-red-700  ">Hub</span>
          </h1>
        </Link>
        <form className="bg-violet-100 p-1 rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            name="search"
            id="searchId"
            placeholder="Search..."
          />
          <FaSearch className="text-gray-600" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to={"/sign-in"}>
            <li className=" sm:inline hover:underline">Sing-in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
