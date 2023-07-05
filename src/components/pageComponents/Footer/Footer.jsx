import { useLocation } from "react-router-dom";
import TextBLock from "../TextBlock/TextBLock";
import Copyright from "../Copyright/Copyright";
import { EvictionReportsFooter } from "../../../pages/EvictionReports/EvictionReportsData";
import { CreditChecksFooter } from "../../../pages/CreditChecks/CreditChecksData";
import Testimonials from "../Testimonials/Testimonials";

const Footer = () => {
  const location = useLocation();
  let footerData = {};
  if ("/eviction-reports" == location.pathname) {
    footerData = EvictionReportsFooter;
  } else {
    footerData = CreditChecksFooter;
  }

  const { footerClass, testimonials = false, h2, h4, p, footerBtn } = { ...footerData };
  const textBlockData = { h2, h4, p };

  return (
    <footer className={footerClass}>
      <div className='sitewrapper'>
        {testimonials && <Testimonials />}
        <div className='finding'>
          <TextBLock textBlockData={textBlockData} buttonData={footerBtn} />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;
