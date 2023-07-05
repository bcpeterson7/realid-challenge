import PageComponentHero from "../../components/PageSectionHero/PageSectionHero";
import PageSectionFullwidth from "../../components/PageSectionFullwidth/PageSectionFullwidth";
import PageSectionSplit from "../../components/PageSectionSplit/PageSectionSplit";
import PageSectionPricing from "../../components/PageSectionPricing/PageSectionPricing";
import PageSectionCTA from "../../components/PageSectionCTA/PageSectionCTA";
import PageSectionBrandLogos from "../../components/PageSectionBrandLogos/PageSectionBrandLogos";
import { HeroSection, PageSections } from "./CreditChecksData";

const CreditChecks = () => {
  return (
    <>
      <PageComponentHero sectionData={HeroSection} />
      <PageSectionFullwidth sectionData={PageSections.dollarContentFullwidth} />
      <PageSectionSplit sectionData={PageSections.TenantScreening} />
      <PageSectionFullwidth sectionData={PageSections.PricingIntro} />
      <PageSectionPricing sectionData={PageSections.Pricing} />
      <PageSectionCTA sectionData={PageSections.CallToAction} />
      <PageSectionBrandLogos sectionData={PageSections.ClientLogos} />
    </>
  );
};
export default CreditChecks;
