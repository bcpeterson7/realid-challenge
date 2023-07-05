import { Link } from "react-router-dom";

// Assets
import "./button.css";

const Button = ({
  url = "#",
  btnClass = "button",
  btnText = "Get Started Now!",
  btnOnClick = null,
  external = false,
}) => {
  return (
    <div className='btn'>
      {true === external && (
        <a href={url} className={btnClass} onClick={btnOnClick}>
          {btnText}
        </a>
      )}
      {false === external && (
        <Link to={url} className={btnClass} onClick={btnOnClick}>
          {btnText}
        </Link>
      )}
    </div>
  );
};
export default Button;
