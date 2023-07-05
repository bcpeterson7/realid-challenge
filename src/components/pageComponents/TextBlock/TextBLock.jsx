import Button from "../Button/Button";
import List from "../List/List";

const TextBLock = ({ textBlockData, buttonData = {} }) => {
  const { h2 = "", h4 = "", p = "", h5 = "", checklistItem = [], checklistClass = "" } = { ...textBlockData };
  const { btnUrl, btnClass, btnText } = { ...buttonData };

  return (
    <>
      {"" != h2 && <h2 dangerouslySetInnerHTML={{ __html: h2 }} />}
      {"" != h4 && <h4 dangerouslySetInnerHTML={{ __html: h4 }} />}
      {"" != p && <p dangerouslySetInnerHTML={{ __html: p }} />}
      {"" != h5 && <h5 dangerouslySetInnerHTML={{ __html: h5 }} />}
      {checklistItem.length > 0 && <List ulClass={checklistClass} items={checklistItem} />}
      {undefined != btnUrl && <Button url={btnUrl} btnClass={btnClass} btnText={btnText} />}
    </>
  );
};
export default TextBLock;
