import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{ color: "green" }}>
          Salim Mammadov
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              {" "}
              <Link to="/form"> Form1 </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/form2"> Form2 </Link>
            </NavLink>
          </NavItem>
          {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
          <CartSummary cart={props.cart} />
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navi;
