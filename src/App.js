import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";

import Edrees from "./Edrees";

function App() {
  return (
    <div>
      {[...Array(100).keys()].map((element) => (
        <Edrees />
      ))}
    </div>
  );
}

export default App;
