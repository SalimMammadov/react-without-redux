import React, { Component } from 'react'
import {Table,Button,Badge} from 'reactstrap';

export default class CartList extends Component {
    renderCart(){
        return (
            <Table hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        {/* <th>Category Id</th> */}
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units in Stock</th>
                        <th>Quantity</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(item=>(
                            <tr key={item.product.id}>
                                <td>{item.product.id}</td>
                                {/* <td>{item.product.categoryId}</td> */}
                                <td>{item.product.productName}</td>
                                <td>{item.product.unitPrice}</td>
                                <td>{item.product.unitsInStock}</td>
                                <td><Badge color="success">{item.quantity}</Badge></td>
                                <td><Button onClick={()=>this.props.removeFromCart(item.product)} color="danger">Remove</Button></td>
                            </tr>
                        ))}
                    </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
