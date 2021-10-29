import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { types } from "../../types/types";

const ItemModal = ({ showItem, setShowItem, items }) => {
  const { index } = useSelector((state) => state.item);

  const dispatch = useDispatch();

  const hideItemModal = () => {
    dispatch({ type: types.UNSET_ITEM });
    setShowItem(false);
  };

  const memo_score = items &&
    index && [
      items[index].perc_score_m1,
      items[index].perc_score_m2,
      items[index].perc_score_m3,
    ];

  memo_score && memo_score.sort((a, b) => b - a);
  const best_score = memo_score && memo_score[0];

  return (
    <>
      {items && index !== null && (
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
              {items[index].name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <div style={{ position: "relative" }}>
                  {items[index].type ? (
                    <video
                      src={items[index].url_original}
                      controls
                      className="w-100 rounded"
                      style={{ maxHeight: "300px" }}
                    />
                  ) : (
                    <img
                      src={items[index].url_original}
                      alt={items[index].id}
                      className="w-100 rounded"
                    />
                  )}
                  <div
                    className="d-flex justify-content-center align-items-center rounded-circle"
                    style={{
                      backgroundColor: `${
                        best_score >= 95
                          ? "#0e6202"
                          : best_score >= 90
                          ? "#0e6202"
                          : best_score >= 85
                          ? "#19cd0a"
                          : best_score >= 80
                          ? "#e4c64e"
                          : best_score >= 75
                          ? "#e3b500"
                          : best_score >= 70
                          ? "#e3882f"
                          : best_score >= 65
                          ? "#e35629"
                          : "#c43000"
                      }`,
                      textShadow: "0px 0.1rem 0.33rem black",
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      fontSize: "1.5rem",
                      height: "4rem",
                      width: "4rem",
                    }}
                  >
                    {best_score.toFixed(1)}
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div
                  className="rounded h-100 description"
                  style={{ border: "solid lightgray .1rem" }}
                >
                  {console.log(items[index])}
                  <p>
                    <span>Name: </span>
                    {items[index].name}
                  </p>
                </div>
              </Col>
            </Row>
            <div className="d-flex justify-content-between mt-3">
              <Button
                variant="primary"
                className="rounded-circle p-2"
                onClick={() => {
                  dispatch({ type: types.SET_ITEM, payload: index - 1 });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.75rem"
                  height="1.75rem"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
              </Button>
              <Button
                variant="primary"
                className="rounded-circle p-2"
                onClick={() => {
                  dispatch({ type: types.SET_ITEM, payload: index + 1 });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.75rem"
                  height="1.75rem"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </Button>
            </div>
            <Row className="d-flex flex-row justify-content-between"></Row>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ItemModal;
