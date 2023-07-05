import TextBLock from "../pageComponents/TextBlock/TextBLock";
import Image from "../pageComponents/Image/Image";

// Assets
import "./pageSectionSplit.css";

const PageSectionSplit = ({ sectionData }) => {
  const className = sectionData.sectionClass;
  const imgLocation = sectionData.imgLocation;
  const { imgSrc = "", imgAlt = "" } = { ...sectionData.splitImg };

  return (
    <section className={className}>
      <div className='sitewrapper'>
        <div className='contents'>
          {/* Despite the html order, css will order them correctly */}
          <div className={"left" === imgLocation ? "col tenant-left has-image" : "col tenant-right has-image"}>
            <Image imgSrc={imgSrc} imgAlt={imgAlt} />
          </div>
          <div className={"left" === imgLocation ? "col tenant-right has-text" : "col tenant-left has-text"}>
            <TextBLock textBlockData={sectionData.splitTextBlock} buttonData={sectionData.splitButton} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageSectionSplit;
