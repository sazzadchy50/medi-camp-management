import React from "react";
import useCampData from "../../../Hook/useCampData";
import { Link } from "react-router-dom";

const ManageCamps = () => {
  const [camp] = useCampData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>image</th>
              <th>Name</th>
              <th>Venue Location </th>
              <th>Date and Time </th>
              <th>Specialized Services</th>
              <th>Targeted Audience</th>
              <th>Fees</th>
              <th>Join Camp</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {camp.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.venueLocation}</td>
                <td>{item.dateTime}</td>
                <td>{item.specializedServices}</td>
                <td>{item.targetedAudience}</td>
                <td>{item.fees}</td>

                <th>
                  <button className="btn btn-success text-white btn-xs ">
                    Join Camp
                  </button>
                </th>
                <th>
                  <Link to={`/camp-details/${item._id}`}>
                    <button className="btn btn-info text-white btn-xs">
                      Details
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCamps;
