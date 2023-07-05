import PageComponentHero from "../../components/PageSectionHero/PageSectionHero";
import PageSectionBrandLogos from "../../components/PageSectionBrandLogos/PageSectionBrandLogos";
import PageSectionTestimonials from "../../components/PageSectionTestimonials/PageSectionTestimonials";
import PageSectionFullwidth from "../../components/PageSectionFullwidth/PageSectionFullwidth";
import PageSectionPricing from "../../components/PageSectionPricing/PageSectionPricing";
import PageSectionSplit from "../../components/PageSectionSplit/PageSectionSplit";
import { HeroSection, PageSections } from "./EvictionReportsData";

const EvictionReports = () => {
  return (
    <>
      <PageComponentHero sectionData={HeroSection} />
      <PageSectionSplit sectionData={PageSections.TenantScreening} />
      <PageSectionSplit sectionData={PageSections.CriminalRecords} />
      <PageSectionFullwidth sectionData={PageSections.TenantScreeningFullwidth} />
      <PageSectionPricing sectionData={PageSections.Pricing} />
      <PageSectionBrandLogos sectionData={PageSections.ClientLogos} />
      <PageSectionTestimonials />
    </>
  );
};
export default EvictionReports;
