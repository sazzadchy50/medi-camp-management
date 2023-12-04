
import {  useForm } from "react-hook-form";
import { FaWindowClose } from "react-icons/fa";

// import UpdateCamp from "./UpdateCamp";
import { useQuery } from "@tanstack/react-query";
import usePublicApi from "../../../Hook/usePublicApi";
import useSecureApi from "../../../Hook/useSecureApi";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import ClockLoader from "react-spinners/ClockLoader";
import { useState } from "react";

const FeedBackAndRating = () => {
  //   const [camp, refetch] = useCampData();
  const { register, handleSubmit, reset } = useForm();
  const [campName,setCampName] = useState()





  const secureApi = useSecureApi();
  const {  loading } = useAuth();

  const { data: camp = [] , refetch} = useQuery({
    queryKey: ["camp"],
    queryFn: async () => {
      const result = await secureApi.get("/dashboard/manage-registered-camps");
      return result.data;
    },    
  });
  //  rating camp
  const onSubmit = async (data) => {
    
    const ratingData = {
      campName: campName,           
      dateTime: new Date(),
      rating : data.rating,
      review: data.review
    };
    const res = await secureApi.post(
      "/dashboard/add-rating",
      ratingData
    );    

    if (res.data.insertedId) {
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: `review added successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      document.getElementById("my_modal_4").close();
    }
  };


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full table-pin-rows">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Venue</th>
              <th>Date and Time </th>

              <th>Fees</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
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
              camp.map((item) => (
                <tr key={item._id}>
                  <td>{item.campName}</td>
                  <td>{item.venueLocation}</td>
                  <td>{item.dateTime}</td>

                  <td>{item.fees}</td>

                  <th>
                    <button
                      className="btn btn-success text-white btn-xs "
                      onClick={() => {
                        setCampName(item.campName);
                        document.getElementById("my_modal_4").showModal();
                       
                      }}
                    >
                      Review
                    </button>
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {/* modal for update */}
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 relative">
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Rating rate *</span>
                </label>
                <input
                  type="number"
                  placeholder="Rating rate out of 5"
                  {...register("rating", {
                    required: true,
                    pattern: /^[0-5]$/,
                  })}
                  className="input input-bordered w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review*</span>
                </label>
                <textarea
                  {...register("review", { required: true })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Review..."
                ></textarea>
              </div>

              <button className="btn bg-purple-500 text-white flex  mx-auto">
                upload
                {/* <FaUtensils/> */}
              </button>
              <button
                className="absolute top-2 right-4"
                onClick={() => document.getElementById("my_modal_4").close()}
              >
                <FaWindowClose className="text-2xl" />
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default FeedBackAndRating;
