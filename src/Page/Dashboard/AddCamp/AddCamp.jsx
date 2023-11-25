import { useForm ,Controller} from "react-hook-form";
import usePublicApi from "../../../Hook/usePublicApi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const AddCamp = () => {
  const { register, handleSubmit,control  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await usePublicApi;
  };
  return (
    <div>
      <div className="bg-base-200 p-10">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
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

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Camp Fees*</span>
            </label>
            <input
              type="number"
              placeholder="Camp Fees"
              {...register("Fees", { required: true })}
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Venue Location*</span>
            </label>
            <input
              type="text"
              placeholder="venue Location"
              {...register("venue location", { required: true })}
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Specialized Services*</span>
            </label>
            <input
              type="text"
              placeholder="Specialized Services"
              {...register("Specialized Services", { required: true })}
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Healthcare Professionals*</span>
            </label>
            <input
              type="text"
              placeholder="Healthcare Professionals"
              {...register("Healthcare Professionals", { required: true })}
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Targeted Audience*</span>
            </label>
            <input
              type="number"
              placeholder="Targeted Audience"
              {...register("Targeted Audience", { required: true })}
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div>
            <label>Schedule Date:</label>
            <Controller
              name="scheduleDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Select Date and Time"
                />
              )}
            />
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
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn bg-orange-500">
            Add Item
            {/* <FaUtensils /> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCamp;
