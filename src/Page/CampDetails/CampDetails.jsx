import useSecureApi from "../../Hook/useSecureApi";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useState } from "react";
import RegistrationModal from "../../Components/RegistrationModal/RegistrationModal";
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
     _id,
    name,
    image,
    venueLocation,
    dateTime,
    specializedServices,
    targetedAudience,
    description,
    fees,
  } = campData;


 
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
    <RegistrationModal fees={fees} campId={_id} campName={name}/>
      
    </div>
  );
};

export default CampDetails;
