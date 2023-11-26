import useCampData from "../../../Hook/useCampData";

const PopularCamps = () => {

    const [camp] = useCampData()
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
        <div>
            <h2>PopularCamps</h2>
            {
                camp.map(item => <>
                     <div className="card glass" key={item._id}>
          <figure>
            <img className="w-full" src={item.image} alt="car!" />
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
              <span className="text-lg font-bold ">Specialized Services :</span>
              <p>{item.specializedServices}</p>
            </p>
            <p>
              <span className="text-lg font-bold ">Targeted Audience :</span>
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
            <div className="card-actions ">
              <button className="btn bg-purple-500 text-white">
                Join Camp
              </button>
              <button className="btn bg-purple-500 text-white">Details</button>
            </div>
          </div>
        </div>
                    
                </>)
            }
        </div>
    );
};

export default PopularCamps;