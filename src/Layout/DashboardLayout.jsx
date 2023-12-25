import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaHandHoldingMedical,
  FaHome,
  FaList,
  FaRegAddressBook,
  FaRegListAlt,
  FaStar,
  FaUser,
} from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
// import useUserRole from "../Hook/useUserRole";
import useOrganizer from "../Hook/useOrganizer";
import useParticipant from "../Hook/useParticipant";
import useProfessional from "../Hook/useProfessional";
import ClockLoader from "react-spinners/ClockLoader";

const DashboardLayout = () => {
  // const [userRole] = useUserRole()
  const [isOrganizer, isOrganizerLoading] = useOrganizer();
  const [isParticipant, isParticipantLoading] = useParticipant();
  const [isHealthProfessional, isHealthProfessionalLoading] = useProfessional();

  console.log("isOrganizer", typeof isOrganizer);
  console.log("isParticipant", isParticipant);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (isDrawerOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
  <div className="flex h-full z-50">
      {/* NEW */}
      {/* <div className="drawer lg:drawer-open "> */}

      <div className={`drawer lg:drawer-open ${isDrawerOpen ? "open" : ""}`}>
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle "
          checked={isDrawerOpen}
          onChange={toggleDrawer}
        />

        <div className="drawer-content flex flex-col  justify-center ">
          <label
            htmlFor="my-drawer-2"
            className="btn justify-start drawer-button lg:hidden w-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block  w-10 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16 "
              ></path>
            </svg>
          </label>

          <div className="flex-1 p-8 ">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content */}
            {loading ||
            isOrganizerLoading ||
            isParticipantLoading ||
            isHealthProfessionalLoading ? (
              <div className="mt-10 ">
                <ClockLoader
                  color="#36d65e"
                  cssOverride={{
                    item: "center",
                  }}
                  loading
                  size={100}
                  speedMultiplier={10}
                />
              </div>
            ) : (
              <>
                {isParticipant?.participant && (
                  <>
                    <li>
                      <NavLink to="/dashboard/participant-profile">
                        <FaUser />
                        Participant Profile Management
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/register-camps">
                        <FaRegAddressBook />
                        Register Camps
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/payment-history">
                        <FaList />
                        Payment History
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/feedback-and-ratings">
                        <FaStar />
                        Feedback and Ratings
                      </NavLink>
                    </li>
                  </>
                )}

                {isOrganizer?.organizer && (
                  <>
                    <li>
                      <NavLink to="/dashboard/organizer-profile">
                        <FaUser />
                        Organizer Profile Management
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/add-a-camp">
                        <FaHandHoldingMedical />
                        Add Camp
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/add-Upcoming-camp">
                        <FaHandHoldingMedical />
                        Add Upcoming Camp
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/manage-camps">
                        <FaList />
                        Manage Camps
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/manage-registered-camps">
                        <FaRegListAlt />
                        Manage Register Camps
                      </NavLink>
                    </li>
                  </>
                )}
                {isHealthProfessional?.healthProfessional && (
                  <>
                    <li>
                      <NavLink to="/dashboard/professional-management">
                        <FaUser />
                        Professionals Profile Manager
                      </NavLink>
                    </li>
                  </>
                )}

                <div className="divider"></div>
                <li>
                  <NavLink to="/">
                    <FaHome />
                    Home
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
