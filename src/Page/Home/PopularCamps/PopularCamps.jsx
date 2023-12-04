import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useCampData from "../../../Hook/useCampData";
import ClockLoader from "react-spinners/ClockLoader";

const PopularCamps = () => {
  const [camp, , isLoading] = useCampData();
  console.log(camp);
  
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

  return (
    <div className="mt-14 p-5 md:p-10">
      <SectionTitle heading="Popular Camps" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {isLoading ? (
          <div className="mt-10 ">
            <ClockLoader
              color="#36d65e"
              cssOverride={{
                item: "center",
              }}
              loading
              size={100}
              speedMultiplier={10}
            />
          </div>
        ) : (
          camp.slice(0, 6).map((item) => (
            <div className="card glass" key={item._id}>
              <figure>
                <img className="w-" src={item.image} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{item.name}</h2>
                <p>
                  <span className="text-lg font-bold ">Venue Location :</span>
                  <p>{item.venueLocation}</p>
                </p>
                <p>
                  <span className="text-lg font-bold ">Date and Time :</span>
                  <p>{formatDate(item.dateTime)}</p>
                </p>
                <p>
                  <span className="text-lg font-bold ">
                    Specialized Services :
                  </span>
                  <p>{item.specializedServices}</p>
                </p>
                <p>
                  <span className="text-lg font-bold ">
                    Targeted Audience :
                  </span>
                  <p>{item.targetedAudience}</p>
                </p>
                <p>
                  <span className="text-lg font-bold ">Description :</span>
                  <p>{item.description}</p>
                </p>
                <p>
                  <span className="text-lg font-bold ">Fees :</span>
                  <p className="text-xl">
                    <span className="text-orange-500">$ </span>
                    {item.fees}
                  </p>
                </p>
                <div className="w-full">
                  <Link to={`/camp-details/${item._id}`}>
                    <button className="btn w-full bg-purple-500 text-white">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="available-camp ">
          <button className="btn ">All Available Camp</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCamps;
