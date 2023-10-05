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
        Start Booking
      </h2>
    </div>
  );
};

export default StartBooking;
