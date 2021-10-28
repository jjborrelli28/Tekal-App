import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { types } from "../../types/types";

const ItemModal = ({ showItem, setShowItem }) => {
  const { item } = useSelector((state) => state.item);

  const dispatch = useDispatch();

  const hideItemModal = (item) => {
    dispatch({ type: types.UNSET_ITEM });
    setShowItem(false);
  };

  return (
    <>
      {item && (
        <Modal
          size="lg"
          show={showItem}
          onHide={() => hideItemModal()}
          aria-labelledby="contained-modal-title-vcenter item-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ color: "#000000" }}
            >
              {item.name} ({item.id})
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                {item.type ? (
                  <video src={item.url_original} controls className="w-100" />
                ) : (
                  <img
                    src={item.url_original}
                    alt={item.id}
                    className="w-100"
                  />
                )}
              </Col>
              <Col md={6} className="description">
                {Object.entries(item).map(
                  ([key, value], index) =>
                    value !== "-" && (
                      <p key={key}>
                        <span>
                          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                        </span>
                        {value === 0 ? (
                          "Image"
                        ) : value === 1 ? (
                          "Video"
                        ) : index === 8 ? (
                          <a href={value}>{value}</a>
                        ) : index === 10 ? (
                          moment(value).format("LL")
                        ) : (
                          value
                        )}
                      </p>
                    )
                )}
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ItemModal;

/*
  item.type ? (
                  <video src={item.url_original} controls className="w-100" />
                ) : (
                  <img
                    src={item.url_original}
                    alt={item.id}
                    className="w-100"
                  />
                )}
              </Col>
              <Col md={6} className="description">
                <p>
                  <span>ID: </span>
                  {item.id}
                </p>
                <p>
                  <span>Name: </span>
                  {item.name}
                </p>
                <p>
                  <span>Sector: </span>
                  {item.sector}
                </p>
                <p>
                  <span>Type: </span>
                  {item.type ? "Video" : "Image"}
                </p>
                <p>
                  <span>Date: </span>
                </p>
                <p>
                  <span>URL: </span>
                  <a
                    href={item.url_original}
                    alt="url"
                    style={{ wordWrap: "break-word" }}
                  >
                    {item.url_original}
                  </a>
                </p>
                <p>
                  <span>Description: </span>
                  {item.description ? item.description : "None"}
                </p>
                <p>
                  <span>Perc score M1: </span>
                  {item.perc_score_m1}
                </p>
                <p>
                  <span>Perc score M2: </span>
                  {item.perc_score_m2}
                </p>
                <p>
                  <span>Perc score M3: </span>
                  {item.perc_score_m3}
                </p>
                <p>
                  <span>Text prominence: </span>
                  {item.global_txt_sal}
                </p>
                {item.type && (
                  <>
                    <p>
                      <span>FPS: </span>
                      {item.fps}
                    </p>
                    <p>
                      <span>Frame count: </span>
                      {item.frame_count}
                    </p>
                    <p>
                      <span>Duration: </span>
                      {item.duration}
                    </p>
                  </>
                )}
                {Object.entries(item).item(([key, value]) => {
                  <p>
                    <span>{key}: </span>
                    {value}
                  </p>;
                })
                */
