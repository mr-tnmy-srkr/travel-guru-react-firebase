import { BsAirplane } from "react-icons/bs";
import bgImage from "../../assets/Rectangle1.png";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-full object-cover" src={bgImage} alt="" />
      <div className="absolute w-full h-full top-0 left-0 bg-[#000000B3]"></div>
      <div>
        <div className="absolute top-0 w-full h-full text-white flex items-center justify-center">
          {/* First Class Travell */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
