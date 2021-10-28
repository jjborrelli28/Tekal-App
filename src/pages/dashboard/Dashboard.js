import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { types } from "../../types/types";

const Dashboard = () => {
  const { data, images, videos } = useSelector((state) => state.data);
  const { sortBy, mode, title, status } = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  const [items, setItems] = useState(data);

  useEffect(() => {
    if (sortBy) {
      setItems(filter(sortBy, data, mode));
    } else {
      setItems(data);
    }
  }, [data, images, videos, sortBy, mode]);

  const filter = (sortBy, items, mode) => {
    const backUpItems = [...items];
    if (mode === "asc") {
      backUpItems?.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return -1;
        }
        return 0;
      });
      return backUpItems;
    } else {
      backUpItems?.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        return 0;
      });
      return backUpItems;
    }
  };

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="">
          <Col sm={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="ps-3 pt-1 pe-3 pb-1">
                <h5>Filters:</h5>
              </Nav.Item>
              <Nav.Item className="filters" onClick={() => setItems(data)}>
                <Nav.Link eventKey="first">None</Nav.Link>
              </Nav.Item>
              <Nav.Item className="filters" onClick={() => setItems(images)}>
                <Nav.Link eventKey="second">Images</Nav.Link>
              </Nav.Item>{" "}
              <Nav.Item className="filters" onClick={() => setItems(videos)}>
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
                    active={status.none}
                    onClick={({ target }) =>
                      dispatch({
                        type: types.NONE,
                        payload: target.textContent,
                      })
                    }
                  >
                    None
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
                        type: types.M1_DESC,
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
                        type: types.M2_DESC,
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
                        type: types.M3_DESC,
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
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Sector</th>
            <th>M1</th>
            <th>M2</th>
            <th>M3</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr className="item" key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type ? "Video" : "image"}</td>
              <td>{item.sector}</td>
              <td>{item.perc_score_m1}</td>
              <td>{item.perc_score_m2}</td>
              <td>{item.perc_score_m3}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
