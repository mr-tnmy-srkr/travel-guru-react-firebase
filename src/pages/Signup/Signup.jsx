import { Link } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-200 py-20">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-lg mb-2 text-gray-800"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  // value={firstName}
                  // onChange={handleFirstNameChange}
                  placeholder="Enter your first name"
                  className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-lg mb-2 text-gray-800"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  // value={lastName}
                  // onChange={handleLastNameChange}
                  placeholder="Enter your last name"
                  className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg mb-2 text-gray-800"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                //   value={email}
                //   onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg mb-2 text-gray-800"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                autoComplete="on"
                //   value={password}
                //   onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-lg mb-2 text-gray-800"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                autoComplete="on"
                //   value={confirmPassword}
                //   onChange={handleConfirmPasswordChange}
                placeholder="Confirm your password"
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-2 text-center">
            <p>
              Already have an account? please
              <Link
                to="/login"
                className="text-lg font-bold text-blue-700 ml-2"
              >
                Login
              </Link>
            </p>
          </div>
          <br />
          <div className="relative ">
            <div className="border-t border-gray-800 w-full absolute"></div>
            <div className="absolute -top-3 left-1/2 bg-white px-4 transform -translate-x-1/2">
              or
            </div>
          </div>

          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Signup;
