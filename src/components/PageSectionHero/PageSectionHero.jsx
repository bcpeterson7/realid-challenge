import Image from "../pageComponents/Image/Image";
import SignUpForm from "../pageComponents/SignUpForm/SignUpForm";

const Hero = ({ sectionData }) => {
  const { imgSrc = "", imgAlt = "" } = { ...sectionData.heroImg };
  const { h1, h4, heroText } = { ...sectionData.heroTextBlock };
  const hasSignUpForm = sectionData.hasSignUpForm;

  return (
    <section className='hero'>
      <div className='sitewrapper'>
        <div className='flLeft hero-left'>
          {/* Will conditionally display text elements */}
          {h1 && <h1 dangerouslySetInnerHTML={{ __html: h1 }} />}
          {h4 && <h4>{h4}</h4>}
          {heroText && <p dangerouslySetInnerHTML={{ __html: heroText }} />}
        </div>
        {/* Will always show an image, otherwise the hero section will be boring!  */}
        <div className='flRight hero-right'>
          {hasSignUpForm && (
            <div className='forarea'>
              <SignUpForm />
            </div>
          )}
          <div className='heroimg'>
            <Image imgSrc={imgSrc} imgAlt={imgAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
