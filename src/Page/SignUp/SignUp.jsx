import { useState } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";

import useAuth from "../../Hook/useAuth";
import useSecureApi from "../../Hook/useSecureApi";
import usePublicApi from "../../Hook/usePublicApi";
import axios from "axios";
// import useAxiosPublic from "../../Hook/useAxiosPublic";

const SignUp = () => {
  // const [disabled, setDisabled] = useState(true);
  // const [password, setPassword] = useState("");
  const { register, handleSubmit } = useForm();
  // const SecureApi = useSecureApi();
  const publicApi = usePublicApi();
  const { createUser, updateUserProfile } = useAuth();
 
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
      const name = data.name;
      const photo = data.photo;
      const role = data.role;

      createUser(email, password)
        .then((res) => {
          const loggedUser = res.user;
          console.log("signUp successfully", loggedUser);
          updateUserProfile(name, photo).then(async () => {
            const userInfo = {
              name: name,
              email: email,
              photo: photo,
              role: role,
            };
            console.log(userInfo);

            // axios.post("http://localhost:5000/api/v1/users", userInfo)
            
            // await publicApi.post("/users", userInfo, {
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            // })
            publicApi.post("/users", userInfo)
            .then((res) => {
              console.log(res);
              if (res.data.insertedId) {
                console.log("user profile added to database");
                Swal.fire({
                  title: "success",
                  text: "Sign Up successfully",
                  icon: "success",
                  confirmButtonText: "Ok",
                });
                navigate("/");
              }
            });
          });
          console.log(email);
        })
        .then(() => {})
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "error",
            text: { error },
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    } catch (error) {
      console.erro("error in sign up ", error);
      Swal.fire({
        title: "Error",
        text: "An unexpected error occurred",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div
      className="bg-cover w-full"
      style={{
        backgroundImage: `url('https://i.ibb.co/QvWZ2Xq/photo-1487088678257-3a541e6e3922-q-80-w-1074-auto-format-fit-crop-ixlib-rb-4-0.jpg')`,
      }}
    >
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Sign Up now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  name="photo"
                  type="photo"
                  placeholder="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("role", { required: true })}
                  className="select select-bordered"
                >
                  <option disabled selected>
                    Role
                  </option>
                  <option value="participant">Participant</option>
                  <option value="healthProfessional">
                    Healthcare Professionals,
                  </option>
                  <option value="organizer">Organizer</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p className=" p-5">
                Already have a account{" "}
                <Link className="text-green-600 font-bold" to="/login">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
