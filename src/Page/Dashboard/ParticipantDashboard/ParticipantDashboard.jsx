import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/useAuth";

const ParticipantDashboard = () => {
    const { register, handleSubmit, control , reset} = useForm();
    const {user} = useAuth()




    const onSubmit = async(data) => {

    }
    return (
        <div>
 <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text">image</span>
              </label>
              <input
                type="text"
                placeholder="image"
                {...register("Fees")}
                className="input input-bordered w-full "
                
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name")}
                className="input input-bordered w-full"
              />
            </div>           
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email")}
                className="input input-bordered w-full "
          
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
            Add camp
            {/* <FaUtensils/> */}
          </button>
        </form>
    
        </div>
    );
};

export default ParticipantDashboard;