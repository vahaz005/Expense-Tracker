import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import"./Header.css";
import BudgetTracker from './BudgetTracker';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-dark" style={{backgroundcolor:"orange"}}>
      <Container style={{background:"orange"}}>
        <Navbar.Brand href="#home" style={{fontWeight:"bold"}}>Spend-Wise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Expenses" id ="my dropdown">
            <button className="mybutton" onClick={BudgetTracker}>  <NavDropdown.Item >Add expenses</NavDropdown.Item></button>
            </NavDropdown>
            <NavDropdown title="Other Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Set monthly Budget</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Get PDF report
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;