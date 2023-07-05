import PricingCard from "../pageComponents/PricingCard/PricingCard";

const PageSectionPricing = ({ sectionData }) => {
  const { sectionClass = "fullwidth fullwidth_boxed", cardListClass = "", pricingCards = [] } = { ...sectionData };
  return (
    <section className={sectionClass}>
      <div className='sitewrapper'>
        {pricingCards.length > 0 && (
          <ul className={cardListClass || "pricing-cards"}>
            {pricingCards.map((priceCard, index) => {
              return <PricingCard key={index} sectionData={priceCard} />;
            })}
          </ul>
        )}
      </div>
    </section>
  );
};
export default PageSectionPricing;
