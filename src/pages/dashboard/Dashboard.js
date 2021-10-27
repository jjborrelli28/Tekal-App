import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <Table striped bordered hover variant="dark">
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
        {data?.map((item, index) => (
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
  );
};

export default Dashboard;
