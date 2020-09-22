import React, { Component } from "react";
import {Link} from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Badge } from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret style={{ color: "orange" }}>
          Cart - <b>{this.props.cart.length}</b>
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((i) => (
            <DropdownItem key={i.id}>
              {i.product.productName} -{" "}
              <Badge color="success">{i.quantity}</Badge>{" "}
            </DropdownItem>
          ))}
          <hr></hr>
          <DropdownItem><Link to="/cart">Go to list</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : <div></div>}
      </div>
    );
  }
}
