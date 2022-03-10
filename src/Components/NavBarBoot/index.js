import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
const Navigation = () => {
  const NavItems = [
    { id: "1", title: "Home", route: "/" },
    { id: "2", title: "Create Account", route: "/createAccount" },
    { id: "3", title: "Deposit", route: "/deposit" },
    { id: "4", title: "Withdraw", route: "/withdraw" },
    { id: "5", title: "All Data", route: "/allData" },
  ];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={styles.navigation}
    >
      <Container>
        <Navbar.Brand href="#home">Bad Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {NavItems.map((navItem) => (
              <Nav.Link>
                <Link
                  to={navItem?.route}
                  key={navItem?.id}
                  className={styles.link}
                >
                  {navItem?.title}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
