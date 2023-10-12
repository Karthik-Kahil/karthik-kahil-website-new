import { Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import Footer from "./features/footer/Footer";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
