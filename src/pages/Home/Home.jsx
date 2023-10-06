import Navbar from "../../components/Header/Navbar";
import Banner from "../../components/Banner/Banner";
import "./Home.css";

import "swiper/css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/Sajek.png";
import img2 from "../../assets/Sreemongol.png";
import img3 from "../../assets/sundorbon.png";
import banner from "../../assets/Frame1.png";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

/* const images = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
]; */

const Home = () => {
  return (
    <div>
      <div className="">
        <div className=" absolute z-10 text-white w-full">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
      </div>
      <h2 className="text-3xl text-white h-full w-full absolute top-0 left-0 flex justify-center items-center">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                "url(https://i.ibb.co/DDdGBDm/Rectangle1.png)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="absolute w-full h-full top-0 left-0 bg-[#000000B3]"></div>
          <SwiperSlide>
            <div className="flex items-center"> 
            <div className="w-2/5">
               
            <div className="title uppercase" data-swiper-parallax="-300">
                Cox's bazar
              </div>
              <div className="text mt-5" data-swiper-parallax="-100">
                <p>
                  Cox's Bazar is a city, fishing port, tourism centre and
                  district headquarters in southeastern Bangladesh. It is famous
                  mostly for its long natural sandy beach, and it ...
                </p>
                <div className="mt-5" data-swiper-parallax="-100">
                <button className="btn btn-primary">Booking</button>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3 w-3/5">
              <img className="w-[30%] border-4 border-yellow-500 rounded-3xl" src={img1} alt="" />
              <img className="w-[30%]" src={img2} alt="" />
              <img className="w-[30%]" src={img3} alt="" />
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Slide 2
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Slide 3
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </h2>
    </div>
  );
};

export default Home;
