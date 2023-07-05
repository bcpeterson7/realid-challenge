/* Simulated data pull fetched from server... */

// Import Assets
import EvictionReportsHeroImg from "./images/hero-eviction-reports.jpg";
import EvictionSampleReport from "../../pages/EvictionReports/images/records.jpg";
import CriminalSampleReport from "../../pages/EvictionReports/images/criminal-records.jpg";
import FiveStars from "../../components/pageComponents/PricingCard/images/star.png";
import cl_01_TransUnion from "../../components/PageSectionBrandLogos/images/cl_01.png";
import cl_02_Equifax from "../../components/PageSectionBrandLogos/images/cl_02.png";
import cl_03_Experian from "../../components/PageSectionBrandLogos/images/cl_03.png";

export const HeroSection = {
  heroImg: {
    imgSrc: EvictionReportsHeroImg,
    imgAlt: "Evictions are on the rise!",
    width: "",
    height: "",
  },
  heroTextBlock: {
    h1: "Tenant <br/>Eviction History",
    h4: "Get direct matches for your applicants instantly using our national eviction history records.",
    heroText:
      "Search over <strong>35 million</strong> records compiled from <strong>50 states</strong>. See the information you need that is usually not found on credit reports",
  },
};

export const PageSections = {
  TenantScreening: {
    sectionClass: "tenant-screening",
    imgLocation: "left",
    splitImg: {
      imgSrc: EvictionSampleReport,
      imgAlt: "Get started today with credit checks",
      width: "",
      height: "",
    },
    splitTextBlock: {
      h2: "Eviction Records",
      p: "rTenant's Enhanced Landlord Search better equips Landlords in determining true applicant evictions. Our matching algorithm utilizes the individual's social security number, address, and previous address information to identify 'Matches' vs. 'Possible Matches,' while searching over <strong> 35 million</strong> records. The report then summarizes the report findings, in an easy to read downloadable and printable format.",
      h5: "You’ll have access to:",
      checklistItem: [
        "Federal, State &amp; County Records ",
        "Civil Filings",
        "Evictions",
        "Judgements",
        "Liens",
        "And More",
      ],
      checklistClass: "access-listing two-col",
    },
    splitButton: {
      btnUrl: "#pricing",
      btnClass: "button",
      btnText: "Buy Instant Reports",
    },
  },

  CriminalRecords: {
    sectionClass: "tenant-screening criminalRecords",
    imgLocation: "right",
    splitImg: {
      imgSrc: CriminalSampleReport,
      imgAlt: "View sample criminal report",
      width: "",
      height: "",
    },
    splitTextBlock: {
      h2: "Criminal Records",
      p: "In addition to evictions we also provide access to over <br><strong> 175+</strong> Million Criminal Records Nationwide.",
      h5: "You’ll have access to:",
      checklistItem: ["Federal, State & County Records", "Felonies", "Misdemeanors", "Sex Offenders", "And More"],
      checklistClass: "access-listing",
    },
    splitButton: {
      btnUrl: "#pricing",
      btnClass: "button",
      btnText: "Buy Instant Reports",
    },
  },

  TenantScreeningFullwidth: {
    sectionClass: "pricing pricing_intro bg-gray50",
    h2: "Fast Accurate Tenant Screening - No Sign-Up Required",
    p: "Quick, reliable and secure, rTenant™ allows landlords and property owners to run eviction checks on prospective renters easily online and make educated leasing decisions within a matter of minutes. Reports are generated and sent directly to you.",
  },

  Pricing: {
    sectionClass: "pricing pricing_cards bg-gray50",
    cardListClass: "pricelist",
    pricingCards: [
      {
        cardItem: "plan1",
        cardClass: "",
        fancyPriceHead: {},
        h4: "Enhanced Landlord<sup>TM</sup><br />Rental Eviction History",
        priceDollars: 20,
        priceCents: 95,
        viewSampleLink: {
          sampleLinkUrl: "#",
          sampleLinkText: "View Sample",
          sampleLinkClass: "viewSample",
        },
        featuresList: [
          "Evictions, Liens, Civil Filings & Judgments",
          "Search 35+ Million Eviction Records",
          "Nationwide: Federal, State and County Courts",
          "No Sign Up Necessary",
          "Instant Online Reports",
          "Results within Seconds",
        ],
        footerBtn: {
          btnUrl: "#",
          btnClass: "buybtn",
          btnText: "Add to cart",
        },
      },
      {
        cardItem: "plan2",
        cardClass: "purple",
        fancyPriceHead: {
          priceHeadImg: {
            imgSrc: FiveStars,
            imgAlt: "Best Offer - 5-star Plan!",
          },
          h6: "Package Discount",
        },
        h4: "Criminal & Eviction Report",
        priceDollars: 24,
        priceCents: 95,
        priceOld: "41.90",
        featuresList: [
          "Felony, Misdemeanor, Sex Offender",
          "Search 175+ Million Criminal Records and 35+ Million Eviction Records",
          "Nationwide: Federal, State and County Courts",
          "No Sign Up Necessary",
          "Instant Online Reports",
          "Results within Seconds",
        ],
        footerBtn: {
          btnUrl: "#",
          btnClass: "buybtn",
          btnText: "Add to cart",
        },
      },
      {
        cardItem: "plan3",
        cardClass: "",
        fancyPriceHead: {},
        h4: "Multicrim<sup>TM</sup> Criminal <br />Background Check",
        priceDollars: 20,
        priceCents: 95,
        viewSampleLink: {
          sampleLinkUrl: "#",
          sampleLinkText: "View Sample",
          sampleLinkClass: "viewSample",
        },
        featuresList: [
          "Felony, Misdemeanor, Sex Offender",
          "Search 175+ Million Criminal Records and 35+ Million Eviction Records",
          "Nationwide: Federal, State and County Courts",
          "No Sign Up Necessary",
          "Instant Online Reports",
          "Results within Seconds",
        ],
        footerBtn: {
          btnUrl: "#",
          btnClass: "buybtn",
          btnText: "Add to cart",
        },
      },
    ],
  },

  ClientLogos: {
    sectionClass: "client-logo bg-gray50",
    clientLogos: [
      {
        imgSrc: cl_01_TransUnion,
        imgAlt: "TransUnion",
        width: "",
        height: "",
      },
      {
        imgSrc: cl_02_Equifax,
        imgAlt: "Equifax",
        width: "",
        height: "",
      },
      {
        imgSrc: cl_03_Experian,
        imgAlt: "Experian",
        width: "",
        height: "",
      },
    ],
  },
};

export const EvictionReportsFooter = {
  footerClass: "footer footer__eviction_reports",
  testimonials: false,
  h2: "A few dollars now could save you thousands later.",
  h4: "Evictions can be stressful and cost unnecessary time and expenses. Use rTenant to verify your — or your rental applicant's — criminal &amp; eviction history.",
  p: "Backed by Real ID, Inc, rTenant<sup>TM</sup> offers the same quality and scope of screening solutions that large property management firms rely on but at affordable prices. From credit and criminal background checks to eviction reports, purchase what you need — a single report or a package deal — and pay as you go.",
  footerBtn: {
    btnUrl: "#",
    btnClass: "button",
    btnText: "Buy Instant Reports",
  },
};
