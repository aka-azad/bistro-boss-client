import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionHeading from "./SectionHeading";

const CategorySwiper = () => {
  return (
    <div className="max-w-screen-xl mx-auto pb-24">
      <SectionHeading
        text={{ heading: "ORDER ONLINE", message: "From 11:00AM to 10:00PM" }}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-fit w-full ">
            <img className="w-full" src={slide1} alt="" />
            <h3 className="text-4xl w-full uppercase text-center absolute -mt-24 text-white font-serif font-light">
              <span className="text-5xl">S</span>alads
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide2} alt="" />
            <h3 className="text-4xl w-full uppercase text-center absolute -mt-24 text-white font-serif font-light">
              <span className="text-5xl">P</span>izzas
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide3} alt="" />
            <h3 className="text-4xl w-full uppercase text-center absolute -mt-24 text-white font-serif font-light">
              <span className="text-5xl">S</span>oups
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide4} alt="" />
            <h3 className="text-4xl w-full uppercase text-center absolute -mt-24 text-white font-serif font-light">
              <span className="text-5xl">D</span>eserts
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide5} alt="" />
            <h3 className="text-4xl w-full uppercase text-center absolute -mt-24 text-white font-serif font-light">
              <span className="text-5xl">V</span>agies
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
