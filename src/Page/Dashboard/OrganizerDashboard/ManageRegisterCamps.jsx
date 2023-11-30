import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useSecureApi from "../../../Hook/useSecureApi";

const ManageRegisterCamps = () => {

  const secureApi = useSecureApi();
  const { data: camp = [] } = useQuery({
    queryKey: ["camp"],
    queryFn: async () => {
      const result = await secureApi.get("/dashboard/manage-registered-camps");
      return result.data;
    },
  });
  console.log(camp);
  
  const [fees, setFees] = useState(null);
  const [campId, setCampId] = useState();
  return (
    <div>
      <table className="table w-full table-pin-rows">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Date and Time</th>
            <th>Venue </th>

            <th>Fees</th>
            <th>payment Status</th>
            <th>Confirm Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {camp.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.dateTime}</td>
              <td>{item.venueLocation}</td>
              <td>{item.fees}</td>
              <th>
                <button
                  className="btn btn-success text-white btn-xs "
                  onClick={() => {
                    setFees(item.fees);
                    document.getElementById("my_modal_4").showModal();
                    setCampId(item._id);
                  }}
                >
                  Update
                </button>
              </th>
              <th>
                <button className="btn btn-info text-white btn-xs">
                  Confirm
                </button>
              </th>
              <th>
                <button className="btn btn-info text-white btn-xs">
                  Cancel
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRegisterCamps;
