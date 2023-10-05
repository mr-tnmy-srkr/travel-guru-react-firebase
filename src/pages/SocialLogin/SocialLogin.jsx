// import React from 'react';

import { GrFacebook } from "react-icons/gr";
import { ImGoogle3 } from "react-icons/im";

const SocialLogin = () => {
  return (
    <div>
      <div className="flex gap-4 lg:gap-0 lg:flex-row flex-col justify-center mt-8 w-full">
        <button className="flex-1 bg-red-500 text-white px-6 py-2 rounded-full mr-2 hover:bg-red-600 ">
          <p className="flex items-center justify-center gap-3">
            {" "}
            <span>Continue With </span>
            <span>
              <ImGoogle3 />
            </span>
          </p>
        </button>
        <button className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          <p className="flex items-center justify-center gap-3">
            {" "}
            <span> Continue With</span>{" "}
            <span>
              <GrFacebook />
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
