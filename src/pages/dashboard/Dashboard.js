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
  const { sortBy, mode, title, status } = useSelector((state) => state.sort);
  const { search } = useSelector((state) => state);

  const [items, setItems] = useState(data);
  const [showItem, setShowItem] = useState(false);

  const dispatch = useDispatch();
  console.log(search);
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
          responsive="sm"
          variant="dark"
          className="mt-3"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Sector</th>
              <th
                className="th-sort"
                onClick={() => {
                  if (status.disable) {
                    dispatch({
                      type: types.M1_ASC,
                    });
                  } else if (status.m1_asc) {
                    dispatch({
                      type: types.M1_DSC,
                    });
                  } else if (status.m1_dsc) {
                    dispatch({
                      type: types.S_DISABLE,
                    });
                  } else {
                    dispatch({
                      type: types.M1_ASC,
                    });
                  }
                }}
              >
                Memorability Score M1{" "}
                {status.m1_asc ? "▲" : status.m1_dsc ? "▼" : "○"}
              </th>
              <th
                className="th-sort"
                onClick={() => {
                  if (status.disable) {
                    dispatch({
                      type: types.M2_ASC,
                    });
                  } else if (status.m2_asc) {
                    dispatch({
                      type: types.M2_DSC,
                    });
                  } else if (status.m2_dsc) {
                    dispatch({
                      type: types.S_DISABLE,
                    });
                  } else {
                    dispatch({
                      type: types.M2_ASC,
                    });
                  }
                }}
              >
                Memorability Score M2{" "}
                {status.m2_asc ? "▲" : status.m2_dsc ? "▼" : "○"}
              </th>
              <th
                className="th-sort"
                onClick={() => {
                  if (status.disable) {
                    dispatch({
                      type: types.M3_ASC,
                    });
                  } else if (status.m3_asc) {
                    dispatch({
                      type: types.M3_DSC,
                    });
                  } else if (status.m3_dsc) {
                    dispatch({
                      type: types.S_DISABLE,
                    });
                  } else {
                    dispatch({
                      type: types.M3_ASC,
                    });
                  }
                }}
              >
                Memorability Score M3{" "}
                {status.m3_asc ? "▲" : status.m3_dsc ? "▼" : "○"}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                className="item"
                key={index}
                onClick={() => showItemModal(item)}
              >
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
