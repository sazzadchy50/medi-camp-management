import { useState } from "react";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import usePublicApi from "../../../Hook/usePublicApi";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../../Hook/useAuth";

const RequestACamp = () => {
  const publicApi = usePublicApi();
  const [submitted, setSubmitted] = useState(false);
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!user) {
      return Swal.fire({
        position: "top-center",
        icon: "error",
        title: `Please login first`,
        showConfirmButton: false,
        timer: 1000,
      });
    }

    console.log("user");
    if (submitted) {
      return;
    }

    setSubmitted(true);

    const reqData = {
      name: data?.name,
      email: data?.email,
      ReqInfo: data?.campInfo,
    };
    console.log(reqData);
    if (data?.email) {
      const res = await publicApi.post("/request-camp", reqData);
      console.log(res);

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Requested Camp successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        setSubmitted(false);
      }
    }
  };

  return (
    <div className="container mx-auto ">
      <h4 className="text-center "> </h4>
      <SectionTitle heading="Request For Camp" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col justify-center align-middle items-center p-5"
      >
        <div className="w-full lg:w-1/2">
          <input
            placeholder="Your Name"
            {...register("name", { required: true })}
            className="border focus:outline-purple-500 p-2 w-full"
          />

          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
            className="border focus:outline-purple-500 p-2 w-full"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <textarea
            placeholder="Camp Request information"
            {...register("campInfo", { required: true })}
            className="border focus:outline-purple-500 p-2 w-full"
          />

          {errors.campInfo && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button type="submit" className="btn w-full bg-purple-500 text-white">
          Details
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default RequestACamp;
