
import "./SectionTitle.css"

const SectionTitle = ({heading}) => {
    return (
        <div className="mb-14 relative overflow-hidden">
     
        <h2 className="text-5xl text-center">{heading}</h2>

        <div className="divider-container  ">
            <div className=" divider  bg-purple-500"></div>
        </div>
      </div>
    );
};

export default SectionTitle;

