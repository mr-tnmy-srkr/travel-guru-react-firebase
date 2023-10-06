import Navbar from "../../components/Header/Navbar";
import Banner from "../../components/Banner/Banner";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
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

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";


const Home = () => {

const navigate=useNavigate();

const handleBooking=(name) => {
  console.log(name);
navigate("/startBooking")
}


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
              "backgroundImage":
                "url(https://i.ibb.co/JQPfQhV/pexels-adam-grabek-784849.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="absolute w-full h-full top-0 left-0 bg-[#605e5eb1]"></div>
          <SwiperSlide>
            <div className="flex items-center">
              <div className="w-2/5">
                <div className="title uppercase" data-swiper-parallax="-300">
                  Cox's bazar
                </div>
                <div className="text mt-5" data-swiper-parallax="-100">
                  <p>
                    Cox's Bazar is a city, fishing port, tourism centre and
                    district headquarters in southeastern Bangladesh. It is
                    famous mostly for its long natural sandy beach, and it ...
                  </p>
                  <div className="mt-5" data-swiper-parallax="-100">
                    <button onClick={()=>handleBooking("cox")} className="btn btn-primary btn-lg capitalize">
                      Booking
                      <span>
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3 w-3/5 relative">
                <img
                  className="w-[30%] border-4 border-yellow-500 rounded-3xl"
                  src={img1}
                  alt=""
                />
                <h3 className="absolute left-[6%] bottom-4 uppercase">
                  {" "}
                  Cox's bazar
                </h3>
                <img className="w-[30%]" src={img2} alt="" />
                <img className="w-[30%]" src={img3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center">
              <div className="w-2/5">
                <div className="title uppercase" data-swiper-parallax="-300">
                  Sreemangal
                </div>
                <div className="text mt-5" data-swiper-parallax="-100">
                  <p>
                    Sreemangal is a city, fishing port, tourism centre and
                    district headquarters in southeastern Bangladesh. It is
                    famous mostly for its long natural sandy beach, and it ...
                  </p>
                  <div className="mt-5" data-swiper-parallax="-100">
                    <button onClick={()=>handleBooking("sree")} className="btn btn-lg  btn-primary capitalize">
                      Booking
                      <span>
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-3/5 relative">
                <img className="w-[30%]" src={img1} alt="" />
                <img
                  className="w-[30%] border-4 border-yellow-500 rounded-3xl"
                  src={img2}
                  alt=""
                />
                <h3 className="absolute left-[41%] bottom-4 uppercase">
                  {" "}
                  Sreemangal
                </h3>
                <img className="w-[30%]" src={img3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center">
              <div className="w-2/5">
                <div className="title uppercase" data-swiper-parallax="-300">
                  Sundarbans
                </div>
                <div className="text mt-5" data-swiper-parallax="-100">
                  <p>
                    Sundarbans is a city, fishing port, tourism centre and
                    district headquarters in southeastern Bangladesh. It is
                    famous mostly for its long natural sandy beach, and it ...
                  </p>
                  <div className="mt-5" data-swiper-parallax="-100">
                    <button onClick={()=>handleBooking("sundar")} className="btn btn-lg  btn-primary capitalize">
                      Booking
                      <span>
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-3/5 relative ">
                <img className="w-[30%]" src={img1} alt="" />
                <img className="w-[30%]" src={img2} alt="" />
                <img
                  className="w-[30%] border-4 border-yellow-500 rounded-3xl"
                  src={img3}
                  alt=""
                />
                <h3 className="absolute right-[7%] bottom-4 uppercase">
                  {" "}
                  Sundarban
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </h2>
    </div>
  );
};

export default Home;
