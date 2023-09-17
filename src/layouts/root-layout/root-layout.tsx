import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

const RootLayout: FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default RootLayout;
