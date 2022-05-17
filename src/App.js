import { useState } from "react";
import Gallery from "./components/Gallery";
import ArtSelector from "./components/ArtSelector";
import PieceSelector from "./components/PieceSelector";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [totalPieces, setTotalPieces] = useState(3);
  const [pieces, setPieces] = useState([]);

  const removePiece = (index) => {
    const newPieces = [...pieces];
    newPieces.splice(index, 1);
    setPieces(newPieces);
  };

  const onPieceClick = (url) => {
    const index = pieces.indexOf(url);
    if (index !== -1) {
      removePiece(url);

      return;
    }
    if (pieces.length === totalPieces) {
      return;
    }
    setPieces([...pieces, url]);
  };
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Gallery removePiece={removePiece} pieces={pieces} />
          </Col>
          <Col>{/* <ArtSelector setTotalPieces={setTotalPieces} /> */}</Col>
        </Row>
        <Row>
          <PieceSelector onPieceClick={onPieceClick} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
