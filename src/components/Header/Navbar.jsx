import { BsPerson, BsFacebook } from "react-icons/bs";
import { BiSearch,  } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
const [nav,setNav]=useState(false)
const handleNav = ()=>{
  setNav(!nav)
}


  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>TANMOY</h1>
      </div>

      <ul className="hidden md:flex">
        <li>News</li>
        <li>Destination</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="hidden md:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

     {/* Hamburger */}
     <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BEACHES.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between items-center my-6">
            <BsFacebook className="icon"/>
            <BsFacebook className="icon"/>
            <BsFacebook className="icon"/>
            <BsFacebook className="icon"/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
