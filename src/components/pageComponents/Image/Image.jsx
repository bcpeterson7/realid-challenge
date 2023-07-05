const Image = ({ imgSrc = "", imgAlt = "", imgWidth = "", imgHeight = "" }) => {
  return <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />;
};
export default Image;
