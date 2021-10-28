import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { data, images, videos } = useSelector((state) => state.data);

  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data);
  }, [data, images, videos]);

  console.log(items);

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
                  variant="dark"
                  style={{ height: "40px", width: "100%" }}
                >
                  None
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item active>None</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>M1 ASC</Dropdown.Item>
                  <Dropdown.Item>M1 DESC</Dropdown.Item>
                  <Dropdown.Item>M2 ASC</Dropdown.Item>
                  <Dropdown.Item>M2 DESC</Dropdown.Item>
                  <Dropdown.Item>M3 ASC</Dropdown.Item>
                  <Dropdown.Item>M3 DESC</Dropdown.Item>
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
