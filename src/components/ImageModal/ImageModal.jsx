function ImageModal({ image }) {
  return (
    <div>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default ImageModal;
