import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { sortData } from "../../helpers/sortData";
import InputSearch from "./InputSearch";
import ItemModal from "./ItemModal";
import { types } from "../../types/types";
import SpinnerComponent from "./SpinnerComponent";
import { toggleIcon } from "../../helpers/toggleIcon";

const Dashboard = () => {
  const { data } = useSelector((state) => state.data);
  const { filterBy } = useSelector((state) => state.filter);
  const { sortBy, mode, status } = useSelector((state) => state.sort);
  const { search } = useSelector((state) => state);

  const [items, setItems] = useState(data);
  const [showItem, setShowItem] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const newData = data && [...data];
    sortData(sortBy, mode, newData);
    setItems(
      newData?.filter(
        (item) => item.name.toLowerCase().includes(search) && item
      )
    );
  }, [data, filterBy, sortBy, mode, search]);

  const showItemModal = (item) => {
    dispatch({ type: types.SET_ITEM, payload: item });
    setShowItem(true);
  };

  const toggleSort = (typeAsc, typeDsc, statusAsc, statusDsc) => {
    if (status.disable) {
      dispatch({
        type: typeAsc,
      });
    } else if (statusAsc) {
      dispatch({
        type: typeDsc,
      });
    } else if (statusDsc) {
      dispatch({
        type: types.DISABLE,
      });
    } else {
      dispatch({
        type: typeAsc,
      });
    }
  };

  return (
    <Container>
      <InputSearch />
      {items ? (
        items.length > 1 ? (
          <Table
            striped
            bordered
            hover
            responsive
            variant="dark"
            className="mt-3"
            style={{ cursor: "pointer" }}
          >
            <thead>
              <tr>
                <th
                  onClick={() => {
                    toggleSort(
                      types.NAME_ASC,
                      types.NAME_DSC,
                      status.name_asc,
                      status.name_dsc
                    );
                  }}
                >
                  Name {toggleIcon(status.name_asc, status.name_dsc)}
                </th>
                <th
                  onClick={() => {
                    toggleSort(
                      types.VIDEO,
                      types.IMAGE,
                      status.video,
                      status.image
                    );
                  }}
                >
                  Type {toggleIcon(status.video, status.image)}
                </th>
                <th
                  onClick={() => {
                    toggleSort(
                      types.SECTOR_ASC,
                      types.SECTOR_DSC,
                      status.sector_asc,
                      status.sector_dsc
                    );
                  }}
                >
                  Sector {toggleIcon(status.sector_asc, status.sector_dsc)}
                </th>
                <th
                  onClick={() => {
                    toggleSort(
                      types.M1_ASC,
                      types.M1_DSC,
                      status.m1_asc,
                      status.m1_dsc
                    );
                  }}
                >
                  Memorability Score M1{" "}
                  {toggleIcon(status.m1_asc, status.m1_dsc)}
                </th>
                <th
                  onClick={() => {
                    toggleSort(
                      types.M2_ASC,
                      types.M2_DSC,
                      status.m2_asc,
                      status.m2_dsc
                    );
                  }}
                >
                  Memorability Score M2{" "}
                  {toggleIcon(status.m2_asc, status.m2_dsc)}
                </th>
                <th
                  onClick={() => {
                    toggleSort(
                      types.M3_ASC,
                      types.M3_DSC,
                      status.m3_asc,
                      status.m3_dsc
                    );
                  }}
                >
                  Memorability Score M3{" "}
                  {toggleIcon(status.m3_asc, status.m3_dsc)}
                </th>
              </tr>
            </thead>
            <tbody style={{ position: "relative" }}>
              {items.map((item, index) => (
                <tr key={index} onClick={() => showItemModal(item)}>
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
          <Alert variant="danger">No results for your search</Alert>
        )
      ) : (
        <SpinnerComponent />
      )}
      <ItemModal showItem={showItem} setShowItem={setShowItem} />
    </Container>
  );
};

export default Dashboard;
