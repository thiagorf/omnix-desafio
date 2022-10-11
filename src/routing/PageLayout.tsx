import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export const PageLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
