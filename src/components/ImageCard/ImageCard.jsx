import style from "./ImageCard.module.css";

const ImageCard = ({ images, description, onClick }) => {
  return (
    <div className={style.card} onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={images} alt={description} className={style.image} />
    </div>
  );
};

export default ImageCard;
