import { useState, useEffect } from "react";

// Assets
import "./AddedToCartMessage.css";

const AddedToCartMessage = ({ itemName, isVisible, onHide }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowMessage(true);
      const timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, onHide]);

  useEffect(() => {
    if (!showMessage) {
      const slideTimeout = setTimeout(() => {
        onHide();
      }, 1000);
      return () => clearTimeout(slideTimeout);
    }
  }, [showMessage, onHide]);

  return (
    <div className={`added-to-cart-message ${showMessage ? "show" : "slide-up"}`}>
      <p>{itemName} added to cart</p>
    </div>
  );
};

export default AddedToCartMessage;
