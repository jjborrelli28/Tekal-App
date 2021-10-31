import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../types/types";
import moment from "moment";
import { scoresColors } from "../../helpers/scoresColors";
import ArrowNext from "../../Icons/ArrowNext";
import ArrowPrevious from "../../Icons/ArrowPrevious";
import Image from "../../Icons/Image";
import Video from "../../Icons/Video";
import AreaChartMemorability from "./AreaChartMemorability";
import BarChartMemorability from "./BarChartMemorability";

const ItemModal = ({ showItem, setShowItem, items }) => {
  const { index } = useSelector((state) => state.item);

  const dispatch = useDispatch();

  const item = items && items[index];

  // Scores ordenados de mayor a menor
  const scores =
    item &&
    [
      ["m1", item.perc_score_m1],
      ["m2", item.perc_score_m2],
      ["m3", item.perc_score_m3],
    ].sort((a, b) => {
      if (a[1] < b[1]) {
        return 1;
      }
      if (a[1] > b[1]) {
        return -1;
      }
      return 0;
    });

  //Mejor score de los 3
  const best_score = item && scores[0][1];

  //Scores de memorabilidad por frames
  const data =
    item?.type &&
    JSON.parse(item[`perc_scores_${scores[0][0]}`])?.map((Score, index) => ({
      name: index + 1,
      Score,
    }));

  const hideItemModal = () => {
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
              className="title-item"
            >
              <h3>
                {item.name} (ID: {item.id})
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <div style={{ position: "relative" }}>
                  {item.type ? (
                    <video
                      src={item.url_original}
                      controls
                      className="w-100 rounded media"
                    />
                  ) : (
                    <img
                      src={item.url_original}
                      alt={item.id}
                      className="w-100 rounded media"
                    />
                  )}
                  <div
                    className="d-flex justify-content-center align-items-center rounded-circle best_score"
                    style={{
                      backgroundColor: `${scoresColors(best_score)}`,
                    }}
                  >
                    {best_score.toFixed(1)}
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div
                  className="rounded h-100 description pt-1"
                  style={{
                    border: "solid lightgray .1rem",
                  }}
                >
                  {item.type ? (
                    <AreaChartMemorability
                      data={data}
                      scores={scores}
                      best_score={best_score}
                    />
                  ) : (
                    <BarChartMemorability scores={scores} item={item} />
                  )}
                  <Accordion className="mt-5">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>More info</Accordion.Header>
                      <Accordion.Body>
                        <p>
                          <span>Text prominence: </span>
                          {item.global_txt_sal}
                        </p>
                        <p>
                          <span>Type: </span>
                          {item.type ? <Video /> : <Image />}
                        </p>
                        <p>
                          <span>Date: </span>
                          {moment(item.date).format("LL")}
                        </p>
                        <p>
                          <span>URL: </span>
                          <a href={item.url_original}>{item.url_original}</a>
                        </p>
                        {item.type ? (
                          <div>
                            <p>
                              <span>FPS: </span>
                              {item.fps}
                            </p>
                            <p>
                              <span>Frames count: </span>
                              {item.frame_count}
                            </p>
                            <p>
                              <span>Duration: </span>
                              {parseInt(item.duration).toFixed(0)} seconds
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
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
                disabled={index === 0 ? true : false}
              >
                <ArrowPrevious />
              </Button>
              <Button
                variant="primary"
                className="rounded-circle p-2"
                onClick={() => {
                  dispatch({ type: types.SET_ITEM, payload: index + 1 });
                }}
                disabled={index === items.length - 1 ? true : false}
              >
                <ArrowNext />
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
