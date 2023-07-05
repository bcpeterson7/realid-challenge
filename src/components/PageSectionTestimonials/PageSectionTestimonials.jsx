import Testimonials from "../pageComponents/Testimonials/Testimonials";

const PageSectionTestimonials = ({ sectionClass = "testimonials bg-gray50" }) => {
  return (
    <section className={sectionClass}>
      <div className='sitewrapper'>
        <Testimonials />
      </div>
    </section>
  );
};
export default PageSectionTestimonials;
