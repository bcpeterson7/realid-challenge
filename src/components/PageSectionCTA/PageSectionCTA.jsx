import Button from "../pageComponents/Button/Button";

const PageSectionCTA = ({ sectionData }) => {
  const { sectionClass, ctaListClass, ctaText, ctaUnderlined } = { ...sectionData };
  const { btnUrl = "#", btnClass = "", btnText = "" } = { ...sectionData.ctaBtn };
  return (
    <section className={sectionClass || ""}>
      <div className='sitewrapper'>
        <ul className={ctaListClass || ""}>
          <li>
            {ctaText || ""} <strong className='underline'>{ctaUnderlined || ""}</strong>
          </li>
          <li>
            <Button url={btnUrl} btnClass={btnClass} btnText={btnText} />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default PageSectionCTA;
