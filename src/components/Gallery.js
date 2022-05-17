import "./Gallery.css";

const Gallery = ({ removePiece, pieces }) => {
  return (
    <div>
      <div className="wall">
        {pieces.map((url, idx) => (
          <div id={url} onClick={() => removePiece(idx)} className="frame">
            <img src={url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
