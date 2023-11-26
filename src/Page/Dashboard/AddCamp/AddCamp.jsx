import { useForm, Controller } from "react-hook-form";
import usePublicApi from "../../../Hook/usePublicApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useSecureApi from "../../../Hook/useSecureApi";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddCamp = () => {
  const [formattedTime, setFormattedTime] = useState('');
  const { register, handleSubmit, control} = useForm();

  const publicApi = usePublicApi();
  const secureApi = useSecureApi();
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
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await publicApi.post(image_hosting_api, 
      imageFile,{
        headers:{
          "content-type": "multipart/form-data",
        },
      });
    if(res.data.success){
      const campData ={
        name: data?.name,
        fees: parseInt(data?.Fees),
        professionals: data.HealthcareProfessionals,
        specializedServices: data.specializedServices,
        venueLocation:data.venueLocation,
        targetedAudience: data.targetedAudience,
        description: data.Description,
        dateTime: formatDate(data.scheduleDate),
        image: res.data.data.display_url,
      };

      const campRes = await secureApi.post("/add-a-camp", campData);
       if(campRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added to camp successfully`,
          showConfirmButton: false,
          timer: 1500
        });
       }

    }
                                                                                 
    console.log(res.data);
  };


  const handleDateChange = (date) => {
    const timeString = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    setFormattedTime(timeString);
  }
  return (
    <div>
      <div className="bg-base-200 p-10">
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
                    handleDateChange(date)
                   
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
            Add camp
            {/* <FaUtensils/> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCamp;
