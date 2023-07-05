import { useRouteError } from "react-router-dom";
import "./PageSection404.css";

const PageSection404 = () => {
  const error = useRouteError();
  console.error(`error`, error);

  return (
    <section className='error-404'>
      <div className='sitewrapper'>
        <div id='error-page'>
          <h1>Oops!</h1>
          <p>Sorry, we can't seem to find what you're looking for! Try using the menu above.</p>
          <p>{/* <i>{error.statusText || error.message}</i> */}</p>
        </div>
      </div>
    </section>
  );
};
export default PageSection404;
