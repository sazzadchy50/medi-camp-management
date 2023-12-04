import { useQuery } from "@tanstack/react-query";
import usePublicApi from "../../../Hook/usePublicApi";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ClockLoader } from "react-spinners";

const Feedback = () => {
  const publicApi = usePublicApi();
  const { data: ratingData = [], isPending: isLoading } = useQuery({
    queryKey: ["rating"],
    queryFn: async () => {
      const res = await publicApi.get("/feedback-and-ratings");
      return res.data;
    },
  });
console.log(ratingData);
  return (
    <div className="container mx-auto">
      <div>
        <SectionTitle heading="Testimonials" />
      </div>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper"
        >
         <div className="grid grid-cols-2">
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
             ratingData.map((item) => (
               <SwiperSlide key={item._id}>
                 <div className="card bg-base-100 shadow-xl">
                   <img
                     src="https://i.ibb.co/SPsK49b/organic-flat-feedback-concept-52683-62653.jpg"
                     alt={item.campName}
                   />
          
                   <div className="card-body">
                     <h2 className="card-title">{item.campName}</h2>
                     <h2><span className="font-bold">Rating :</span> <span className="font-bold">{item.rating}</span></h2>
                     <p><span className="font-bold">Date :</span>{item.dateTime}</p>
                     <p><span className="font-bold">Review :</span>{item.review}</p>
                    
                   </div>
                 </div>
               </SwiperSlide>
             ))
           )}
         </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
