import { Link } from "react-router-dom";
import Image from "../Image/Image";

// Assets
import bbb from "./images/bbb-logo.png";
import LinkedIn from "./images/in.png";
import Twitter from "./images/twt.png";
import Facebook from "./images/fb.png";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='copyright'>
      <div className='flLeft'>
        <ul>
          <li>
            <a
              href='http://www.bbb.org/chicago/business-reviews/screening-background-and-employment/real-id-in-lincolnwood-il-88431132'
              target='_blank'
              rel='noreferrer'
            >
              <Image imgSrc={bbb} imgAlt='Better Business Bureau' />
            </a>
          </li>
          <li>Copyright © {currentYear} Real ID, Inc. All Rights Reserved.</li>
          <li>
            <Link to='#'>Terms of Use</Link>
          </li>
          <li>
            <Link to='#'>Privacy Policy</Link>
          </li>
          <li>
            <Link to='#'>Laws &amp; Notices</Link>
          </li>
        </ul>
      </div>
      <div className='flRight'>
        <ul>
          <li>
            Legal Toll Free: <a href='tel:(888) 727-3368'>(888) 727-3368</a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='#'>
              <Image imgSrc={Facebook} imgAlt='Facebook' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='#'>
              <Image imgSrc={Twitter} imgAlt='Twitter' />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='#'>
              <Image imgSrc={LinkedIn} imgAlt='LinkedIn' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Copyright;
