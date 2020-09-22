import React, { Component } from "react";

export default class Form extends Component {
    state = {
        userName  : '',
        lastName  : "",
    }
    formModel = (event) => {
        // this.setState({userName : event.target.value})
        let name = event.target.name;
        let value = event.target.value ;
        this.setState({[name] : value})
    }
    formSubmit = (event) =>{
        event.preventDefault()
        alert(this.state.userName + " " + this.state.lastName)
        document.getElementById('form').reset()
    }
  render() {
    return (
      <div>
          <form id="form" onSubmit={this.formSubmit}>
        <h3>UserName</h3>
        <input name="userName" onChange = {this.formModel} type="text" />
        <h3>Last Name</h3>
        <input name="lastName" onChange = {this.formModel} type="text" />
        <input type="submit" />
        </form>
      </div>
    );
  }
}
