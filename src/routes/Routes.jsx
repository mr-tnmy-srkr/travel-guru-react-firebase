import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import StartBooking from "../pages/StartBooking/StartBooking";

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
    ],
  },
]);
export default routes;
