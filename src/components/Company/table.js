import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Footer from '../Layout/Footer/Footer';
import { Link } from 'react-router-dom'
//import { axios } from 'axios';
const axios = require('axios').default;

class table extends Component {
    state = {
        total: 0,
        products: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    // updateQuantity() {

    // }


    // quantityHandler = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // Quantity = (id, qty) => {
    //     this.setState({ quantity: qty });
    //     const data = {
    //         quantity: qty,
    //     };

    //     axios
    //         .put(
    //             "http://localhost:100/cart/update/" + id,
    //             data,
    //             this.state.config
    //         )
    //         .then(() => {
    //             this.setState({
    //                 total: 0,
    //             });
    //             this.show();
    //         });
    // };

    componentDidMount() {
        this.show();
    }

    show() {
        axios
            .get("http://localhost:100/cart/showall", this.state.config)
            .then((response) => {
                console.log(response.data.data);
                let productCart = response.data.data;
                this.setState({
                    products: productCart,
                    // quantity: response.data.cart.quantity,
                });

                let total = 0
                this.state.products.map(products=>{
                    total += products.productId.pprice * products.quantity                    
                })
                this.setState({
                    total
                })

                // console.log(cart);

            })
            .catch((err) => console.log(err.response));
    }



    deleteProduct = (id) => {
        axios.delete('http://localhost:100/cart/delete/' + id, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete successfull")
                // window.location.reload();
                this.show()
            })
            .catch((err) => {
                //console.log(err.response)
                alert("Delete unsuccessfull")
            })

    }






    render() {
        return (
            <>
                <div className="container-fluid">
                    <table id="cart" className="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th style={{ width: "50%" }}>Product</th>
                                <th style={{ width: "10%" }}>Price</th>
                                <th style={{ width: "8%" }}>Quantity</th>
                                <th style={{ width: "22%" }} className="text-center">
                                    Subtotal
                                              </th>

                                <th style={{ width: "10%" }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products?.map((products) => (
                                <tr>
                                    <td data-th="Product">
                                        <div className="row">
                                            <div className="col-sm-2 hidden-xs">
                                                <img
                                                    src={`http://localhost:100/public/images/${products.productId.pimage}`}
                                                    alt="..."
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="col-sm-10">
                                                <h2 className="nomargin">
                                                    {products.productId?.product}
                                                </h2>
                                                {/* <p>{cart.productId.productDescription}</p> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">{products.productId.pprice}</td>
                                    <td className="quantity" data-th="Quantity">
                                        <Button
                                            variant="warning"
                                            onClick={this.Quantity.bind(
                                                this,
                                                products._id,
                                                products.quantity - 1
                                            )}
                                        >
                                            <h5>-</h5>
                                        </Button>
                                        <span style={{ margin: "5px" }}>{products.quantity}</span>
                                        <Button
                                            variant="warning"
                                            onClick={this.Quantity.bind(
                                                this,
                                                products._id,
                                                products.quantity + 1
                                            )}
                                        >
                                            <h5>+</h5>
                                        </Button>
                                    </td>
                                    <td data-th="Subtotal" className="text-center">
                                        {products.productId.pprice * products.quantity}
                                    </td>
                                    <td className="actions" data-th="">
                                        <button
                                            className="btn btn-danger btn-lg"
                                            onClick={() => this.deleteProduct(products._id)}
                                        >
                                            {" "}
                                                    Delete
                                                    <i className="fa fa-trash-o"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="visible-xs">
                                <td className="text-center">
                                    <strong style={{ color: "black" }}>
                                        Total {this.state.total}
                                        {/* <Checkout grandtotal={this.state.total} /> */}
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/product" className="btn btn-warning">
                                        <i className="fa fa-angle-left"></i> Continue Shopping
                                                </a>
                                </td>
                                <td colspan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-center">
                                    <strong>Total Rs. {this.state.total}</strong>
                                </td>
                                <td>
                                    <Link
                                        to="/checkout"
                                        className="btn btn-success btn-block"
                                        style={{ height: "25px" }}
                                    >
                                        Checkout <i className="fa fa-angle-right"></i>
                                    </Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* <Footer/> */}
            </>
        )
    }

}

export default table;