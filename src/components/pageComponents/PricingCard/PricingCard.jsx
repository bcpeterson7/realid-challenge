import { useState } from "react";
import { useGlobalContext } from "../../../appContext";
import AddedToCartMessage from "../AddedToCartMessage/AddedToCartMessage";
import Button from "../Button/Button";
import Image from "../Image/Image";
import List from "../List/List";

const PricingCard = ({ sectionData }) => {
  // Get global state
  const { cart, setCart, cartCount, setCartCount } = useGlobalContext();
  const [showMessage, setShowMessage] = useState(false);

  // Component data
  const {
    cardItem = "1",
    cardClass = "",
    fancyPriceHead,
    h4,
    priceDollars,
    priceCents,
    priceOld,
    viewSampleLink,
    featuresList,
    footerBtnP,
    footerBtn,
  } = { ...sectionData };
  const { imgSrc, imgAlt } = { ...fancyPriceHead.priceHeadImg };
  const { h6 } = { ...fancyPriceHead };
  const { sampleLinkUrl, sampleLinkText, sampleLinkClass } = { ...viewSampleLink };
  const { btnUrl, btnClass, btnText } = { ...footerBtn };

  const incrementItem = (item) => {
    setCart((prevItems) => ({
      ...prevItems,
      [item]: prevItems[item] + 1,
    }));
    setCartCount(cartCount + 1);
  };

  const decrementItem = (item) => {
    setCart((prevItems) => ({
      ...prevItems,
      [item]: Math.max(prevItems[item] - 1, 0),
    }));
    setCartCount((prevCartCount) => Math.max(prevCartCount - 1, 0));
  };

  return (
    <div className='price-card'>
      <div className={cardClass} data-card={cardItem}>
        <div className='price-head'>
          {fancyPriceHead.priceHeadImg && (
            <div className='star'>
              <Image imgSrc={imgSrc} imgAlt={imgAlt} />
            </div>
          )}
          {h6 && <h6>{h6}</h6>}
          {h4 && <h4 dangerouslySetInnerHTML={{ __html: h4 }} />}

          {/* It's a pricing card, so showing a price will be mandatory */}
          <h3>
            <sup>$</sup>
            {priceDollars || "0"}
            <sup>{priceCents || "00"}</sup>
          </h3>
          {priceOld && <h3 className='oldprice'>${priceOld}</h3>}
          {"" != sampleLinkUrl && (
            <a href={sampleLinkUrl} className={sampleLinkClass}>
              {sampleLinkText}
            </a>
          )}
        </div>
        {featuresList && <List ulClass='checklist' items={featuresList} />}
        {footerBtn && (
          <div className='price-foot price-foot_increment'>
            {footerBtnP && <p>{footerBtnP}</p>}
            <Button url={btnUrl} btnClass={btnClass} btnText={btnText} btnOnClick={() => incrementItem(cardItem)} />
          </div>
        )}
        {cart[cardItem] > 0 && (
          <div className='price-foot price-foot_decrement'>
            <Button
              url={btnUrl}
              btnClass={btnClass}
              btnText='Remove from cart'
              btnOnClick={() => decrementItem(cardItem)}
            />
          </div>
        )}
      </div>
      {cartCount > 0 && showMessage && (
        <AddedToCartMessage itemName={cardItem} isVisible={showMessage} onHide={() => setShowMessage(false)} />
      )}
    </div>
  );
};
export default PricingCard;
