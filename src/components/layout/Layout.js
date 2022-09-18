import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/bits-bots-logo.png";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";


function Layout(props) {
  const navigate = useNavigate();

  function logOut() {
    navigate("/");
    localStorage.clear();
  }
  return (

      <div className="wrapper">
      <Navbar variant="dark" className="nav">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={Logo} className="nav__brand" alt="Logo"></img>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/cart" className="nav-link nav__link">
              <FontAwesomeIcon icon={faCartArrowDown} className="nav__icon" />
              Cart
            </Nav.Link>
            <Nav.Link onClick={logOut} href="#features">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="nav__icon"
              />{" "}
              Log Out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {props.children}
      </div>
      
      
  );
}

export default Layout;
