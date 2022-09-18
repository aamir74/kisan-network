import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
} from "@coreui/react";
import { memo, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = memo(() => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <Link className="navbar-brand" to="/home">
            PhoneBook
          </Link>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </CNavItem>
              <CNavItem>
                <Link className="nav-link" to="/messages">
                  Messages
                </Link>
              </CNavItem>
              {/* <Link to="/messages">Messa  ges</Link> */}
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
});

export default Navbar;
