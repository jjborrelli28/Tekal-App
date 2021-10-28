import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterData } from "../../helpers/filterData";
import { sortData } from "../../helpers/sortData";
import ControlPanel from "./ControlPanel";
import ItemModal from "./ItemModal";
import { types } from "../../types/types";
import SpinnerComponent from "./SpinnerComponent";

const Dashboard = () => {
  const { data } = useSelector((state) => state.data);
  const { filterBy } = useSelector((state) => state.filter);
  const { sortBy, mode } = useSelector((state) => state.sort);
  const { search } = useSelector((state) => state);

  const [items, setItems] = useState(data);
  const [showItem, setShowItem] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const newData = filterData(filterBy, data);
    sortData(sortBy, mode, newData);
    setItems(
      newData.filter((item) => item.name.toLowerCase().includes(search) && item)
    );
  }, [data, filterBy, sortBy, mode, search]);

  const showItemModal = (item) => {
    dispatch({ type: types.SET_ITEM, payload: item });
    setShowItem(true);
  };

  return (
    <Container>
      <ControlPanel />
      {items.length > 1 ? (
        <Table
          striped
          bordered
          hover
          responsive
          variant="dark"
          className="mt-3"
        >
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
            {items.map((item, index) => (
              <tr
                className="item"
                key={index}
                onClick={() => showItemModal(item)}
              >
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
      ) : (
        <SpinnerComponent />
      )}
      <ItemModal showItem={showItem} setShowItem={setShowItem} />
    </Container>
  );
};

export default Dashboard;
