import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import StartBooking from "../pages/StartBooking/StartBooking";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import FindHotel from "../pages/findHotel/FindHotel";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/startBooking",
        element: <StartBooking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/findHotel",
        element: <FindHotel />,
      },
    ],
  },
]);
export default routes;
