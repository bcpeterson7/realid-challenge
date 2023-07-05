import { Link, useLocation } from "react-router-dom";
import NavBar from "./../NavBar/NavBar";
import HeaderTopPhoneNumber from "./../HeaderTopPhoneNumber/HeaderTopPhoneNumber";
import Image from "../Image/Image";

// Assets
import "./header.css";
import logo from "./images/logo.png";
import CartIcon from "../CartIcon/CartIcon";

const Header = () => {
  const location = useLocation();
  const headerClass = "header__" + location.pathname.replace(/^\//g, "");

  return (
    <header className={"header__" != headerClass ? `header ${headerClass}` : "header"}>
      <div className='sitewrapper'>
        <div className='site-logo'>
          <Link to='#' className='logo'>
            <Image imgSrc={logo} imgAlt='rTenant - site logo' />
          </Link>
        </div>
        {"/eviction-reports" == location.pathname && <HeaderTopPhoneNumber />}
        <NavBar />
        {"/credit-checks" == location.pathname && <CartIcon />}
      </div>
    </header>
  );
};
export default Header;
