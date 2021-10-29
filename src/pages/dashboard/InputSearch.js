import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { types } from "../../types/types";
import { useDispatch } from "react-redux";
import { useState } from "react";

const InputSearch = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleFormChange = ({ target }) => {
    setValue(target.value);
    dispatch({ type: types.SEARCH, payload: value.toLowerCase() });
  };

  return (
    <Row className="p-2">
      <Col lg={4}></Col>
      <Col lg={4}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search by name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleFormChange}
            value={value}
          />
        </InputGroup>
      </Col>
      <Col lg={4}></Col>
    </Row>
  );
};

export default InputSearch;
