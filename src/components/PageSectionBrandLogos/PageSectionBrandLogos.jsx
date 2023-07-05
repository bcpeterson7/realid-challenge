import Image from "../pageComponents/Image/Image";

const PageSectionBrandLogos = ({ sectionData }) => {
  const { sectionClass = "brand-logos", clientLogos = [] } = { ...sectionData };
  return (
    <section className={sectionClass}>
      <div className='sitewrapper'>
        <ul>
          {clientLogos.map((logoData, index) => {
            return (
              <li key={index}>
                <Image imgSrc={logoData.imgSrc} imgAlt={logoData.imgAlt} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default PageSectionBrandLogos;
