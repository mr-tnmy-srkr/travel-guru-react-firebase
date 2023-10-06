import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Header/Navbar";


const StartBooking = () => {
  

  return (
    <div>
      <div className="">
        <div className=" absolute z-10 text-white w-full">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
      </div>
      <h2 className="text-3xl text-white h-full w-full absolute top-0 left-0 flex justify-center items-center">
        <div className="flex justify-center items-center w-screen">
          <div className="flex-1 flex flex-col justify-center items-center h-96 px-20 ">
            <h1> SUNDARBAN</h1>

            <p className="text-lg text-justify">
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
              monastery is home to bronze statues and centuries-old Buddhist
              manuscripts. South of town, the tropical rainforest of Himchari
              National Park has waterfalls and many birds. North, sea turtles
              breed on nearby Sonadia Island.
            </p>
          </div>
          <div className="flex-1 h-96 flex flex-col  justify-center ">
       <h1 className="flex-1 text-center border">Calendar Coming Soon ...</h1>
       <Link className="  mx-auto" to="/findHotel"><button className="btn btn-primary capitalize px-16">Start Booking</button></Link>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default StartBooking;
