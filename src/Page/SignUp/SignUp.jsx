import { useContext, useEffect, useState } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/Shared/SocialLogin";

import useAuth from "../../Hook/useAuth";
// import useAxiosPublic from "../../Hook/useAxiosPublic";


const SignUp = () => {
  const [disabled, setDisabled] = useState(true);
  const [password, setPassword] = useState("");
//   const { createUser, updateUserProfile } = useContext(AuthContext);
  const { createUser, updateUserProfile } = useAuth()
//   const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);
//   const handleCaptcha = (e) => {
//     e.preventDefault();

//     const user_captcha_value = e.target.value;
//     if (validateCaptcha(user_captcha_value)) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//     console.log(e.target.value);
//   };

  // const isPasswordValid = () =>{
  //  return(
  //   /[A-Z]/.test(password) &&
  //   /[a-z]/.test(password) &&
  //   /[!@#$%^&*(),.?":{}|<>]/.test(password)
  //  );
  // }
  // const isPasswordValid = (password) => {

  //   const hasUppercase = /[A-Z]/.test(password);
  //   const hasLowercase = /[a-z]/.test(password);
  //   const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  //   return hasUppercase && hasLowercase && hasSpecialChar;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(e.target.email.value);
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(password);
    
    // if (!isPasswordValid()) {
    //   Swal.fire({
    //     title: "Error!",
    //     text: "Password must have at least one uppercase , lowercase and special character with minimum 6 character",
    //     icon: "error",
    //     confirmButtonText: "Ok",
    //   });
    // } else {

    // }
    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log("signUp successfully", loggedUser);
        updateUserProfile(name, photo)
        .then(() => {
        //   const userInfo ={
        //     name: name,
        //     email: email,
        //     photo: photo
        //   }

        //   axiosPublic.post('/users', userInfo)
        //   .then(res => {
        //    if(res.data.insertedId){
        //     console.log("user profile added to database");
        //     form.reset();
        //     Swal.fire({
        //       title: "success",
        //       text: "Sign Up successfully",
        //       icon: "success",
        //       confirmButtonText: "Ok",
        //     });
          
        //     navigate("/")
        //    }
        //   })
          
          
        });
       
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
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
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
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control mt-6">
                <button  className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <p className=" p-5">
                Already have a account{" "}
                <Link className="text-green-600 font-bold" to="/login">
                  Log in
                </Link>
              </p>
            </form>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
