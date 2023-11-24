import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import logo from "../../../src/assets/cover.png"
// import useCart from "../../Hook/useCart";
// import useAdmin from "../../Hook/useAdmin";

const Navbar = () => {
  //   const { user, logOut } = useAuth();
  //   const [isAdmin] = useAdmin();
  const user = false;
  const navigate = useNavigate();

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
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
      <li>
        <Link className="indicator mt-2" to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-secondary badge-sm indicator-item">
            {/* +{cart?.length} */}
          </span>
        </Link>
      </li>
    </>
  );
  //   const handleLogOut = () => {
  //     logOut();
  //     navigate("/login");
  //   };

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="">
        <Link>
        <img src={logo} alt="" />
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
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >

            <li>
                <Link to="/login">
                    LogIn
                </Link>

            </li>
            <div className=" md:hidden ">
              {navMenu}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
