import CartIcon from "../CartIcon/CartIcon";
import "./HeaderTopPhoneNumber.css";

const HeaderTopPhoneNumber = () => {
  return (
    <div className='topPhNumber'>
      <span className='phNum'>(888) 727-3368 </span>
      <CartIcon />
      <a href='#' target='_blank' rel='noopener noreferrer' className='topLogin'>
        Login
      </a>
    </div>
  );
};
export default HeaderTopPhoneNumber;
