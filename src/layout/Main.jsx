import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
