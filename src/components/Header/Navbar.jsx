
import logo1 from "../../assets/Frame1.png";
import logo2 from "../../assets/Frame2.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        {location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/findHotel"? (
          <Link to="/" className={logo ? "hidden" : "block"}>
            <img src={logo1} alt="" />
          </Link>
        ) : (
          <Link to="/" className={logo ? "hidden" : "block"}>
            <img src={logo2} alt="" />
          </Link>
        )}
      </div>
      <Link to="/startBooking">s Bking</Link>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>News</li>
        <li>Destination</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      
      <div className="hidden md:flex">
        <Link to="/login">
          <button className="px-10">Login</button>
        </Link>
        {/* <BsPerson size={20} /> */}
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={40} />
        ) : (
          <HiOutlineMenuAlt4 size={40} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li className="border-b">Home</li>
          <li className="border-b">News</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Blog</li>
          <li className="border-b">Contact</li>
          <div className="flex flex-col">
            <Link to="/signup">
              <button className="w-full my-6">SignUp</button>
            </Link>
            <Link to="/login">
              <button className="w-full">Login</button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
