import { useGlobalContext } from "../../../appContext";

import "./CartIcon.css";

const CartIcon = () => {
  const { cartCount } = useGlobalContext();

  return (
    <a href='#' className='cartIcon'>
      {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
      <span className='cart-text-'>Cart</span>
    </a>
  );
};
export default CartIcon;
