import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaWindowClose } from "react-icons/fa"
import useSecureApi from '../../Hook/useSecureApi';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
const RegistrationModal = ({fees, campId, campName}) => {
    console.log(fees);
    const { register, handleSubmit , reset} = useForm();
    const [submitted, setSubmitted] = useState(false);
    const SecureApi = useSecureApi()
    const {user} = useAuth();
    const onSubmit = async (data) => {

        
            if(submitted){
              return;
            }
            setSubmitted(true)
             const registerData = {
              name: data.name,
              age: parseInt(data.age),
              email: user?.email,
              gender: data.gender,
              address: data.address,
              phoneNumber: parseInt(data.phoneNumber),
              fees: fees, 
              requirement: data.requirement,
              campId : campId,
              campName: campName

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
              reset();
             }
        
             console.log(registerData);
          };
    return (
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
              
            </form>
            <button
                className="absolute top-4 right-4"
                onClick={() => document.getElementById("my_modal_4").close()}
              >
                
                <FaWindowClose className="text-2xl" />
              </button>
          </div>
        </div>
      </dialog>
    );
};

export default RegistrationModal;