import { useEffect, useRef } from "react";

const Testimonials = () => {
  const scriptRef = useRef(null);

  // Loads the testimonials script on each re-render
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./src/assets/js/26230.js";
    script.async = true;

    scriptRef.current.appendChild(script);

    return () => {
      if (scriptRef.current && scriptRef.current.contains(script)) {
        scriptRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div
        style={{ minHeight: "100px", height: "164px", marginBottom: "60px" }}
        className='shopperapproved_widget sa_rotate sa_count3 sa_horizontal sa_count3 sa_bgWhite sa_colorBlack sa_borderGray sa_rounded sa_jMy sa_fixed sa_showlinks sa_large sa_showdate '
      >
        <div style={{ textAlign: "right" }}>
          <a
            className='sa_footer'
            href='http://www.shopperapproved.com/reviews/rTenant.com/'
            target='_blank'
            rel='nofollow'
          >
            <img
              className='sa_widget_footer'
              style={{ border: 0 }}
              alt=''
              src='https://www.shopperapproved.com/widgets/images/widgetfooter-whitelogo-eng.png'
            />
          </a>
        </div>
      </div>
      <div ref={scriptRef}></div>
    </>
  );
};

export default Testimonials;
