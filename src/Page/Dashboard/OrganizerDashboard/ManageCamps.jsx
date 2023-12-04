import React, { useEffect, useState } from "react";
import useCampData from "../../../Hook/useCampData";
import { Link, useAsyncError, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { FaWindowClose } from "react-icons/fa";
import DatePicker from "react-datepicker";
import UpdateCamp from "./UpdateCamp";
import { useQuery } from "@tanstack/react-query";
import usePublicApi from "../../../Hook/usePublicApi";
import useSecureApi from "../../../Hook/useSecureApi";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import ClockLoader from "react-spinners/ClockLoader";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ManageCamps = () => {
  const [camp, refetch] = useCampData();
  const { register, handleSubmit, reset, control } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [formattedTime, setFormattedTime] = useState("");
  const [fees, setFees] = useState(null);
  const [campName, setCampName] = useState();
  const [campId, setCampId] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  const publicApi = usePublicApi();
  const secureApi = useSecureApi();
  const { user, loading } = useAuth();
  const {id} = useParams()
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureApi.delete(`/delete-camp/${item._id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: `${item.name} has been deleted successfully`,
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      }
    });
    // const { data } = useQuery({
    //   queryKey:['update-camp', item._id],
    //   queryFn: async()=>{
    //     const res = await secureApi(`/delete-camp/${id}`)
    //     return res.data;
    //   }
    // })
  };

  //  update camp
  const onSubmit = async (data) => {
    if (campId) {
      const imageFile = { image: data.image[0] };
      const res = await publicApi.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const campData = {
          name: data?.name,
          fees: parseInt(data?.Fees),
          professionals: data.HealthcareProfessionals,
          specializedServices: data.specializedServices,
          venueLocation: data.venueLocation,
          targetedAudience: data.targetedAudience,
          description: data.Description,
          dateTime: formatDate(data.scheduleDate),
          image: res.data.data.display_url,
          email: user?.email,
        };
        const campRes = await secureApi.patch(
          "/dashboard/update-camp",
          campData
        );
        // const campRes = await secureApi.patch(
        //   `/dashboard/update-camp/${id}`,
        //   campData
        // );
        console.log("campRes", campRes);
        if (campRes.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: `${data.name} update successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      }
    }
  };

  const openModal = (item) => {
    console.log(item);
    setSelectedItem(item);
    setFees(item.fees);
    setCampId(item._id);

  
    reset({
      name: item.name,
      Fees: item.fees,
      venueLocation: item.venueLocation,
      specializedServices: item.specializedServices,
      healthcareProfessionals: item.professionals,
      targetedAudience: item.targetedAudience,
      
      Description: item.description,

    });

    document.getElementById("my_modal_4").showModal();
  };

  const formatDate = (dateTimeString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };

    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  const handleDateChange = (date) => {
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setFormattedTime(timeString);
  };
  return (
    <div>
      <div className="overflow-x-auto">
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
                        setCampName(item.name)
                        openModal(item)
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
              ))
            )}
          </tbody>
        </table>
        {/* modal for update */}
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 relative">
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
              <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Camp name*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Camp name"
                    {...register("name", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Camp Fees*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Camp Fees"
                    {...register("Fees", { required: true })}
                    className="input input-bordered w-full "
                    required
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Venue Location*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="venue Location"
                    {...register("venueLocation", { required: true })}
                    className="input input-bordered w-full "
                    required
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Specialized Services*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Specialized Services"
                    {...register("specializedServices", { required: true })}
                    className="input input-bordered w-full "
                    required
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">
                      Healthcare Professionals*
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Healthcare Professionals"
                    {...register("healthcareProfessionals", { required: true })}
                    className="input input-bordered w-full "
                    required
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Targeted Audience*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Targeted Audience"
                    {...register("targetedAudience", { required: true })}
                    className="input input-bordered w-full "
                    required
                  />
                </div>
                <div>
                  <label>Schedule Date:*</label>
                  <br />

                  <Controller
                    name="scheduleDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        className="p-2 rounded-lg w-full border"
                        selected={field.value}
                        onChange={(date) => {
                          field.onChange(date);
                          handleDateChange(date);
                        }}
                        // onChange={handleDateChange}

                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        placeholderText="Select Date and Time"
                        minDate={new Date()}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description*</span>
                </label>
                <textarea
                  {...register("Description", { required: true })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Comprehensive Description..."
                ></textarea>
              </div>
              <div className="from-control w-full">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full "
                />
              </div>
              <button className="btn bg-orange-500">
                Update
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

export default ManageCamps;
