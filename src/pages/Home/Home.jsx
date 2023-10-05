// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../../components/Header/Navbar";
import Banner from "../../components/Banner/Banner";

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
        home
      </h2>
    </div>
  );
};

export default Home;
