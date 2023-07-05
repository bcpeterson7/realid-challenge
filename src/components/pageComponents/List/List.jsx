// Assets
import "./list.css";

const List = ({ ulClass = "list", items = [] }) => {
  return (
    <ul className={ulClass}>
      {items.map((item, index) => {
        return <li key={index}>{item.replace(/&amp;/g, "&")}</li>;
      })}
    </ul>
  );
};
export default List;
