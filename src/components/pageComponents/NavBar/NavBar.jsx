import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      {/* Mobile nav toggle */}
      <input className='menu-btn' type='checkbox' id='menu-btn' checked={isMenuOpen} onChange={handleMenuToggle} />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='navicon'></span>
      </label>

      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link to={menuItem.linkTo} onClick={handleMenuItemClick}>
              {menuItem.linkText}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
