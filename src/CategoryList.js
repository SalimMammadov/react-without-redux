import React, { Component } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories = () => {
    axios.get("http://localhost:3000/categories").then((r) => {
      this.setState({ categories: r.data });
    });
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup hover>
          {this.state.categories.map((c) => (
            <ListGroupItem
              active={
                c.categoryName === this.props.selectedCategory ? true : false
              }
              action
              onClick={() => this.props.changeCategory(c)}
              key={c.id}
            >
              {c.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
