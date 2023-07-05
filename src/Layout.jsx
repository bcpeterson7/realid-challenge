import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/pageComponents/Header/Header";
import Footer from "./components/pageComponents/Footer/Footer";

const Layout = () => {
  // Add a class to the body element
  const location = useLocation();
  const bodyClass = location.pathname.replace(/^\//g, "") + "-page";
  document.body.className = bodyClass;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
