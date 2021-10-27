import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { getList } from "./reducers/data";
import Dashboard from "./pages/dashboard/Dashboard";

const TekalApp = () => {
  const dispatch = useDispatch();

  dispatch(getList());

  return (
    <Container>
      <header className="mt-4">
        <h1>Tekal App</h1>
        <hr />
      </header>
      <Dashboard />
    </Container>
  );
};

export default TekalApp;
