import "./PieceSelector.css";

const urls = [
  "https://i.etsystatic.com/20559186/r/il/094d72/2633422749/il_1588xN.2633422749_ll92.jpg",
  "https://i.etsystatic.com/22322062/r/il/11e531/3502579695/il_1588xN.3502579695_gwse.jpg",
  "https://i.etsystatic.com/23658401/r/il/706d7f/3053297773/il_1588xN.3053297773_a8b3.jpg",
  "https://i.etsystatic.com/20559186/r/il/c5290d/3746329942/il_1588xN.3746329942_ehsb.jpg",
  "https://i.etsystatic.com/20559186/r/il/ef1725/2757940908/il_1588xN.2757940908_idkj.jpg",
  "https://i.etsystatic.com/20559186/r/il/e4ab0b/1995313550/il_1588xN.1995313550_1xn3.jpg",
  "https://i.etsystatic.com/10764581/r/il/5543d9/3560387577/il_1588xN.3560387577_k3c7.jpg",
  "https://i.etsystatic.com/10668481/r/il/8ffddf/2393344521/il_1588xN.2393344521_pmck.jpg",
  "https://i.etsystatic.com/10668481/r/il/25d5b5/2345660272/il_1588xN.2345660272_lz53.jpg",
];

const PieceSelector = ({ onPieceClick }) => {
  return (
    <div className="pic-container">
      {urls.map((url) => {
        return (
          <div className="pic" id={url} onClick={() => onPieceClick(url)}>
            <img src={url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default PieceSelector;
