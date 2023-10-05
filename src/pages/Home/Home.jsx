import Navbar from "../../components/Header/Navbar";
import Banner from "../../components/Banner/Banner";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";


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
       home
      </h2>
    </div>
  );
};

export default Home;
