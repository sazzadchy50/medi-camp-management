import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { FaWindowClose } from "react-icons/fa";
import DatePicker from "react-datepicker";
const UpdateCamp = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [formattedTime, setFormattedTime] = useState("");
  const [fees, setFees] = useState(null);
  const [campName, setCampName] = useState();

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
  console.log(name);

  const onSubmit = async (data) => {
    if (submitted) {
      return;
    }
    setSubmitted(true);
    //  const registerData = {
    //   name: data.name,
    //   age: parseInt(data.age),
    //   gender: data.gender,
    //   address: data.address,
    //   phoneNumber: parseInt(data.phoneNumber),
    //   fees: fees,
    //   requirement: data.requirement
    //  }

    //  const res = await SecureApi.post('camp-register', registerData)

    //  if(res.data.insertedId){
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: `${data.name} registered successfully`,
    //     showConfirmButton: false,
    //     timer: 1500
    //   });
    //   setSubmitted(false)
    //   reset();
    //  }
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
                  <span className="label-text">Healthcare Professionals*</span>
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
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateCamp;
