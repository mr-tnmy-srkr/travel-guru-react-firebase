import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Banner/Banner";

const MainLayouts = () => {
    return (
        <div className="2xl:container mx-auto ">
        <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        </div>
       
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;