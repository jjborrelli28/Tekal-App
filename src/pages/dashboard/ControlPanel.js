import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { types } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";

const ControlPanel = () => {
  const { title, status } = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  return (
    <div className="p-2">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="">
          <Col sm={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="ps-3 pt-1 pe-3 pb-1">
                <h5>Filters:</h5>
              </Nav.Item>
              <Nav.Item
                className="filters"
                onClick={() => dispatch({ type: types.F_DISABLE })}
              >
                <Nav.Link eventKey="first">Disable</Nav.Link>
              </Nav.Item>
              <Nav.Item
                className="filters"
                onClick={() => dispatch({ type: types.IMAGES })}
              >
                <Nav.Link eventKey="second">Images</Nav.Link>
              </Nav.Item>{" "}
              <Nav.Item
                className="filters"
                onClick={() => dispatch({ type: types.VIDEOS })}
              >
                <Nav.Link eventKey="third">Videos</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="ps-3 pt-1 pe-3 pb-1">
                <h5>Sort by:</h5>
              </Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="primary"
                  style={{ height: "40px", width: "100%" }}
                >
                  {title}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item
                    active={status.disable}
                    onClick={({ target }) =>
                      dispatch({
                        type: types.S_DISABLE,
                        payload: target.textContent,
                      })
                    }
                  >
                    Disable
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    active={status.m1_asc}
                    onClick={({ target }) =>
                      dispatch({
                        type: types.M1_ASC,
                        payload: target.textContent,
                      })
                    }
                  >
                    M1 ▲
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={status.m1_dsc}
                    onClick={({ target }) =>
                      dispatch({
                        type: types.M1_DSC,
                        payload: target.textContent,
                      })
                    }
                  >
                    M1 ▼
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={status.m2_asc}
                    onClick={({ target }) =>
                      dispatch({
                        type: types.M2_ASC,
                        payload: target.textContent,
                      })
                    }
                  >
                    M2 ▲
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={status.m2_dsc}
                    onClick={({ target }) =>
                      dispatch({
                        type: types.M2_DSC,
                        payload: target.textContent,
                      })
                    }
                  >
                    M2 ▼
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={status.m3_asc}
                    onClick={({ target }) =>
                      dispatch({
                        type: types.M3_ASC,
                        payload: target.textContent,
                      })
                    }
                  >
                    M3 ▲
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={status.m3_dsc}
                    onClick={({ target }) =>
                      dispatch({
                        type: types.M3_DSC,
                        payload: target.textContent,
                      })
                    }
                  >
                    M3 ▼
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ControlPanel;
