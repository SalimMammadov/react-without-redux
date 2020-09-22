import React, { Component } from "react";
import Navi from "./Navbar.js";
import ProductList from "./ProductList.js";
import CategoryList from "./CategoryList.js";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import Form from "./Form";
import Form2 from "./Form2";

export default class App extends Component {
  state = {
    selectedCategory: "",
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getAllProducts();
  }
  categoryinfo = { title: "CategoryList" };
  productinfo = { title: "ProductList" };
  changeCategory = (c) => {
    if (this.state.selectedCategory === c.categoryName)
      this.setState({ selectedCategory: "" });
    else this.setState({ selectedCategory: c.categoryName });
    this.getAllProducts(c.id);
  };
  getAllProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url = url + "/?categoryId=" + id;
    }
    axios.get(url).then((r) => {
      this.setState({ products: r.data });
    });
  };
  addToCart = (product) => {
    let newProduct = this.state.cart;
    var addedItem = newProduct.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity = addedItem.quantity + 1;
    } else {
      newProduct.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newProduct });
    alertify.success(product.productName + " added to cart !");
  };
  removeFromCart = (removedproduct) => {
      let newstate = [];
      this.state.cart.forEach((item,index)=>{
        if(item.product.id === removedproduct.id)
          this.state.cart.splice(index,1);
          newstate=this.state.cart;
      })
      this.setState({cart : newstate})
      alertify.error(removedproduct.productName + " removed from cart !");
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Navi cart={this.state.cart} />
          <Row style={{ margin: "30px" }}>
            <Col xs="3">
              <CategoryList
                selectedCategory={this.state.selectedCategory}
                changeCategory={this.changeCategory}
                info={this.categoryinfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      addToCart={this.addToCart}
                      products={this.state.products}
                      selectedCategory={this.state.selectedCategory}
                      info={this.productinfo}
                    />
                  )}
                />
                <Route
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      removeFromCart={this.removeFromCart}
                      cart={this.state.cart}
                    />
                  )}
                />
                <Route path="/form" component={Form} />
                <Route path="/form2" component={Form2} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
