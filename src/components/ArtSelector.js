import { Dropdown } from "react-bootstrap";

const ArtSelector = ({ setTotalPieces }) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Layout
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setTotalPieces(2)}>
            Two large
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setTotalPieces(3)}>
            One large, 2 small
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ArtSelector;
