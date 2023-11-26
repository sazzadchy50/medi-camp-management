import useSecureApi from "../../Hook/useSecureApi";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useState } from "react";
const CampDetails = () => {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
 const SecureApi = useSecureApi()

  const id = useParams();
  console.log("id", id);
  const { data: campData = {} } = useQuery({
    queryKey: ["campDetail", id.id],
    queryFn: async () => {
      const res = await SecureApi.get(`/camp-details/${id.id}`);
      return res.data;
    },
  });
  const {
    name,
    image,
    venueLocation,
    dateTime,
    specializedServices,
    targetedAudience,
    description,
    fees,
  } = campData;
  console.log(campData);

  const onSubmit = async (data) => {
// console.log(data);

    if(submitted){
      return;
    }
    setSubmitted(true)
     const registerData = {
      name: data.name,
      age: parseInt(data.age),
      gender: data.gender,
      address: data.address,
      phoneNumber: parseInt(data.phoneNumber),
      fees: fees, 
      requirement: data.requirement
     }

     const res = await SecureApi.post('camp-register', registerData)

     if(res.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} registered successfully`,
        showConfirmButton: false,
        timer: 1500
      });
      setSubmitted(false)
     }

     console.log(registerData);
  };
  return (
    <div className="p-5 md:p-10">
      <div className="card glass ">
        <figure>
          <img
            className="w-full object-cover h-[70vh]"
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p>
            <span className="text-lg font-bold ">Venue Location :</span>
            <p>{venueLocation}</p>
          </p>
          <p>
            <span className="text-lg font-bold ">Date and Time :</span>
            <p>{dateTime}</p>
          </p>
          <p>
            <span className="text-lg font-bold ">Specialized Services :</span>
            <p>{specializedServices}</p>
          </p>
          <p>
            <span className="text-lg font-bold ">Targeted Audience :</span>
            <p>{targetedAudience}</p>
          </p>
          <p>
            <span className="text-lg font-bold ">Description :</span>
            <p>{description}</p>
          </p>
          <p>
            <span className="text-lg font-bold ">Fees :</span>
            <p className="text-xl">
              <span className="text-orange-500">$ </span>
              {fees}
            </p>
          </p>
          <div className="card-actions ">
            <button
              className="btn bg-purple-500 text-white"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Join Camp
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 relative">
          <h3 className="font-bold text-lg text-center">Registration</h3>

          <div className="">
            <form
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
              className=" space-y-6"
            >
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">Age</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Your Age"
                    {...register("age", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">PhoneNumber</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Your PhoneNumber"
                    {...register("phoneNumber", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text font-bold">Gender</span>
                  </label>
                  <select
                    defaultValue="default"
                    {...register("gender", { required: true })}
                    className="select select-bordered"
                  >
                    <option disabled selected>
                      gender
                    </option>
                    <option value="male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className=" flex form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your address"
                    {...register("address", { required: true })}
                    className="input input-bordered w-full "
                    required
                  />
                </div>
                <div className=" flex form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Camp Fees :<span className="text-xl">
                    <span className="text-orange-500"> $ </span>
                    {fees}
                  </span> </span>
                  </label>
                 
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">Requirements</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Any specific Health Information "
                    {...register("requirement", { required: true })}
                    className="input input-bordered w-full "
                    required
                  />
                </div>
              </div>
              <div className=" text-center">
                <button className="btn bg-orange-500 text-white"
                disabled={submitted}
                >
                  {submitted ? "Submitting..." : "Registration"}
                </button>
              </div>
              <button
                className="absolute top-0 right-4"
                onClick={() => document.getElementById("my_modal_4").close()}
              >
                
                <FaWindowClose className="text-2xl" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CampDetails;
