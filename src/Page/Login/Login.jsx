// import { useContext, useEffect, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/Shared/SocialLogin';
import useAuth from '../../Hook/useAuth';


const Login = () => {
  

  const {signIn} = useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log('location from login', location.state);
   
    const handleSubmit =(e)=>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
      .then(res => {
        const user = res.user;
        console.log('login successfully',user);
        Swal.fire({
          title: "success",
          text: "Log in successfully",
          icon: "success",
          // confirmButtonText: "Ok",
        });
        navigate(from, {replace: true});
      })
      .catch((error)=>{
        console.log(error.message);
      })
    }
    
  return (
    <div className="bg-cover w-full" style={{backgroundImage: `url('https://i.ibb.co/QvWZ2Xq/photo-1487088678257-3a541e6e3922-q-80-w-1074-auto-format-fit-crop-ixlib-rb-4-0.jpg')`}} >
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">Login now</h1>
                          
               
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body ">
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
                   name ='password'
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                 
                </div>
               
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p className='p-5'>
                Do not have a account <Link className='text-red-500 font-bold' to='/signUp'>Sign up</Link>
              </p>
              </form>
             <SocialLogin/>
            </div>
          </div>
        </div>

    </div>
   
  );
};

export default Login;
