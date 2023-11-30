;

const ManageRegisterCamps = () => {
    return (
        <div>
             <table className="table w-full table-pin-rows">
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
                  <button
                    className="btn btn-info text-white btn-xs"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
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