/* Simulated data pull fetched from server... */

// Import Assets
import CreditChecksHeroImg from "./images/hero-credit-checks.png";
import TenantScreeningSampleReport from "../../pages/CreditChecks/images/screening.png";
import FiveStars from "../../components/pageComponents/PricingCard/images/star.png";
import cl_01_TransUnion from "../../components/PageSectionBrandLogos/images/cl_01.png";
import cl_02_Equifax from "../../components/PageSectionBrandLogos/images/cl_02.png";
import cl_03_Experian from "../../components/PageSectionBrandLogos/images/cl_03.png";

export const HeroSection = {
  hasSignUpForm: true,
  heroImg: {
    imgSrc: CreditChecksHeroImg,
    imgAlt: "Get started today with credit checks",
    width: "",
    height: "",
  },
  heroTextBlock: {
    h1: "Tenant <br/> Credit Checks",
    h4: "The fastest, most cost-effective tenant screening tools.",
    heroText:
      "It is important to diligently screen tenants to reduce risk. Past credit history, financial difficulties or high debt loads are early indicators to potential tenancy issues. With rTenant™️, you can run instant credit checks online from our national database and have the results within minutes.",
  },
};

export const PageSections = {
  dollarContentFullwidth: {
    sectionClass: "dollar-content fullwidth fullwidth_boxed",
    h2: "A few dollars now could save you thousands later.",
    p: "Backed by Real ID, Inc, rTenant™ offers the same quality and scope of screening solutions that large property management firms rely on at affordable prices. From credit and criminal background checks to eviction reports, purchase what you need — a single report or a package deal — and pay as you go.",
    checklist1: ["Instant On-Line Reports", "Proprietary Credit Grading"],
    checklist2: ["TransUnion, Experian and Equifax Data", "Renter Pay Option Available"],
  },

  TenantScreening: {
    sectionClass: "tenant-screening",
    imgLocation: "left",
    splitImg: {
      imgSrc: TenantScreeningSampleReport,
      imgAlt: "View sample report",
      width: "",
      height: "",
    },
    splitTextBlock: {
      h2: "Straight-Forward Tenant Screening",
      p: "Quick, reliable and secure, rTenant™ allows landlords and property owners to run credit checks on propsective renters easily online and make educated leasing decisions within a matter of minutes. Once screening is authorized, reports are generated and sent directly to you",
    },
    splitButton: {
      btnUrl: "#",
      btnClass: "button",
      btnText: "Get Started",
    },
  },

  PricingIntro: {
    sectionClass: "pricing pricing_intro",
    h2: "Pricing",
    p: "Instant One-Time Reports or On-Demand Comprehensive Screening.",
  },

  Pricing: {
    sectionClass: "pricing pricing_cards",
    cardListClass: "pricelist",
    pricingCards: [
      {
        cardItem: "creditPlan1",
        cardClass: "",
        fancyPriceHead: {},
        h4: "One-Time Credit Check",
        priceDollars: 20,
        priceCents: 95,
        featuresList: ["Instant Credit Review", "Late Payments & Collections", "Tenancy Risk Level - rTenant Score*"],
        footerBtnP: "All credit checks require written consent.",
        footerBtn: {
          btnUrl: "#",
          btnClass: "buybtn",
          btnText: "But Now",
        },
      },
      {
        cardItem: "creditPlan2",
        cardClass: "purple",
        fancyPriceHead: {
          priceHeadImg: {
            imgSrc: FiveStars,
            imgAlt: "Best Offer - 5-star Plan!",
          },
          h6: "Package Discount",
        },
        priceDollars: 28,
        priceCents: 95,
        priceOld: "50.00",
        featuresList: ["Credit Check", "Background Check", "Rental Eviction History"],
        footerBtn: {
          btnUrl: "#",
          btnClass: "buybtn",
          btnText: "Sign Up",
        },
      },
    ],
  },

  CallToAction: {
    sectionClass: "pricing pricing_cta",
    ctaListClass: "eviction-reports",
    ctaText: "Instant Background Checks or Eviction Reports.",
    ctaUnderlined: "$20.95",
    ctaBtn: {
      btnUrl: "#",
      btnClass: "buybtn",
      btnText: "Sign Up",
    },
  },

  ClientLogos: {
    sectionClass: "client-logo border-top",
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

export const CreditChecksFooter = {
  footerClass: "footer",
  testimonials: true,
  h2: "Finding The Right Tenant Has Never Been Easier.",
  footerBtn: {
    btnUrl: "#",
    btnClass: "button",
    btnText: "Sign Up , It’s FREE",
  },
};
