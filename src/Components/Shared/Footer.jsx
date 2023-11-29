import { Link } from "react-router-dom";
import logo from "../../../src/assets/cover.png";

const footerMenu = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/available-camp">Available Camp</Link>
    </li>
    <li>
      <Link to="/dashboard">DashBoard</Link>
    </li>
    <li>
      <Link to="/contactUs">Contact Us</Link>
    </li>
    {/* {user && isAdmin && (
      <li>
        <Link to="/dashboard/adminHome">Dashboard</Link>
      </li>
    )}
    {user && !isAdmin && (
      <li>
        <Link to="/dashboard/userHome">Dashboard</Link>
      </li>
    )} */}
  
  </>
);
const Footer = () => {
  return (

    
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img
            src={logo}
            className="w-60 mr-3"
            alt="Knowledge hub Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-5">
          
            {footerMenu}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Medi camp management
            </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
