import List from "../pageComponents/List/List";

const PageSectionFullwidth = ({ sectionData }) => {
  const { sectionClass = "fullwidth fullwidth_boxed", checklist1 = [], checklist2 = [], h2, p } = { ...sectionData };

  return (
    <section className={sectionClass}>
      <div className='sitewrapper'>
        <div className='contents'>
          {h2 && <h2>{h2}</h2>}
          {p && <p>{p}</p>}
          {(checklist1.length > 0 || checklist2.length > 0) && (
            <div className='checkwrap'>
              {checklist1.length > 0 && <List ulClass='checklist' items={checklist1} />}
              {checklist2.length > 0 && <List ulClass='checklist' items={checklist2} />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default PageSectionFullwidth;
