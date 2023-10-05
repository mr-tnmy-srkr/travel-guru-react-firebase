import { Outlet } from "react-router-dom";


const MainLayouts = () => {
  return (
    <div className="2xl:container mx-auto ">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
