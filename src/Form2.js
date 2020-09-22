import React, { Component } from "react";
import { Form, Label, FormGroup, Button, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class Form2 extends Component {
  state = {
    email: "",
    password: "",
    desc: "",
  };
  formModel = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  formSubmit = (event) => {
    event.preventDefault();
    if (this.state.email === "") 
    {
    alertify.error("Boş qoymaq olmaz");
    return false
    }
    alertify.success(this.state.email);
    document.getElementById("form").reset();
    this.setState({email : ""})
  };
    
  render() { 
    return (
      <div>
        <Form id="form" onSubmit={this.formSubmit}>
          <FormGroup>
            <Label>Email adress</Label>
            <Input onChange={this.formModel} placeholder="Enter email" name="email" type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input onChange={this.formModel} placeholder="Your password" name="password" type="password" />
          </FormGroup>
          <Button color="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
