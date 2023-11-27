import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import logo from "../../../src/assets/cover.png";


const Navbar = () => {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();

  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/available-camp">Available Camp</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DashBoard</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      {/* {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome">Dashboard</NavLink>
        </li>
      )} */}
    
    </>
  );
  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="">
        <Link to="/">
          <img className="w-60" src={logo} alt="" />
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5 ">{navMenu}</ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL? user?.photoURL : null }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {user ? (
                <button onClick={handleLogOut}>Log Out</button>
              ) : (
                <Link to="/login">LogIn</Link>
              )}
            </li>
            <div className=" md:hidden ">{navMenu}</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
