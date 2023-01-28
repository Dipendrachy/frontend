import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';

const axios = require('axios').default;

class showMyBookings extends Component {
    state = {
        flights: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {
        this.load();
    }

    load(){
        axios({
            method: 'get',
            url: 'http://localhost:90/booking/showMyBookings',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                // console.log("Data")
                this.setState({
                    flights: response.data.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    deleteFlight = (id) => {
        axios.delete('http://localhost:90/booking/delete/' + id, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete successfull")
                window.location.reload();
            })
            .catch((err) => {
                //console.log(err.response)
                alert("Delete unsuccessfull")
            })

    }
    render() {
        return (
            <>
                <Container>
                    <Row>

                        <div>
                            <p></p>

                            {
                                this.state.flights?.map((flight) => {
                                    return (

                                        <div>
                                <div className="auth-wrapper-company">
                                    <div className="auth-inner-company">
                                        <div className="container-fluid mt-5 screenFit">
                                            <div className="row ">
                                                <div className="col-md-12">
                                                    <div className="p-3 bg-green">
                                                        <h3 className="text-left-header">HAMRO FLIGHT</h3>
                                                        <div>
                                                            
                                            <img src={`http://localhost:90/${flight.image}`} alt="" className="img-fluid" style={{ height: "400px" }} />
                                        </div>
                                                    </div>
                                                    
                                                    <hr></hr>
                                                    <p className="p-2 text-left font-medium">
                                                        The price of our services vary with outlet and time. We currently provideHimalayan Massagein the following outlets:
                                                       
                                        </p>

                                                    <div className=" p-4 details-header mt-4">

                                                        <h2 className=" ml-3">{flight.cname}</h2>
                                                    </div>
                                                    <div className=" p-4 details-header mt-4">
                                                    </div>
                                                    <div className="details-body mx-4 p-3">
                                                        <div className="row">
                                                            <div className="col-md-6" >
                                                                <h4 className="font-medium">Depature </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">{flight.depature}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">Arrival </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">{flight.arrival}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">Duration </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">{flight.duration}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">Price </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">{flight.price}</h4>
                                                            </div>
                                                        </div>
                                                        <hr></hr>
                                                        <button onClick={this.deleteFlight.bind(this, flight._id)} className="btn-right btn-danger btn-lg">Delete</button>
                                                        
                                                        <button className="btn-left btn-warning btn-lg"><Link to={'/updateFlight/'+flight._id}> Update</Link></button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                <p></p>
                            </div> 
                                    )
                                })
                            }

                        </div>


                    </Row>
                </Container>
                <Footer />
            </>
        )
    }

}

export default showMyBookings;