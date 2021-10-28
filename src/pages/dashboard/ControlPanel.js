import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { types } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const ControlPanel = () => {
  const { title, status } = useSelector((state) => state.sort);
  const { search } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleFormChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch({ type: types.SEARCH, payload: value.toLowerCase() });
    setValue("");
  };

  return (
    <div className="p-2">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="d-flex justify-content-end">
          <Col lg={6}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="ps-3 pt-1 pe-3 pb-1">
                <h5>
                  Search:{" "}
                  <span style={{ fontWeight: "normal", color: "lightgray" }}>
                    {search && `"${search}"`}
                  </span>
                </h5>
              </Nav.Item>
              <Form onSubmit={handleSubmitForm}>
                <InputGroup className="mb-3" style={{ height: "40px" }}>
                  <FormControl
                    placeholder="Search by name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleFormChange}
                    value={value}
                  />
                  <Button
                    variant="primary"
                    id="button-addon2"
                    onClick={handleSubmitForm}
                  >
                    Button
                  </Button>
                </InputGroup>
              </Form>
            </Nav>
          </Col>
          <Col lg={1}>
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
          <Col lg={2}>
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
