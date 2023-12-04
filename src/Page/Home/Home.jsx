import Banner from "./Banner/Banner";
import PopularCamps from "./PopularCamps/PopularCamps";
import RequestACamp from "./Request a Camp/RequestACamp"
import AboutUs from "./About us/AboutUs"
import Feedback from "./Feedback/Feedback";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCamps/>
            <AboutUs/>
            <RequestACamp/>
            <Feedback/>
            
        </div>
    );
};

export default Home;