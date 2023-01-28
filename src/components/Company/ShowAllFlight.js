import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';

const axios = require('axios').default;

class myListings extends Component {
    state = {
        flights: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:90/addFlight/showall',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                // console.log("Data")
                console.log(response.data.data);

                this.setState({
                    flights: response.data.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    deleteFlight = (id) => {
        axios.delete('http://localhost:90/addFlight/delete/' + id, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete successfull")
                window.location.reload()
            })
            .catch((err) => {
                //console.log(err.response)
                alert("Delete unsuccessfull")
            })

    }

    updateFlight = (e) => {
        e.preventDefault()

        axios({
            method: 'put',
            data: this.state,
            url: 'http://localhost:90/addFlight/update',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                alert("update successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("update unsuccessfull")
            })



    }

    applyBooking = (id) => {
        // alert(id)
        axios({
            method: 'post',
            url: 'http://localhost:90/booking/insert/'+id,
            // data: id,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                alert("Booking apply successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("Booking apply unsuccessfull")
            })
    }


    render() {
        if (localStorage.getItem('token') && localStorage.getItem('role') === 'Company') {
            var show = (
                <div>
                    {
                        this.state.flights.map((flight) => {
                            return (
                                <div class="container">
                                <div class="row bg-faded">
                                    <div class="col-md-4">
                                        <div class="card card-body h-100 justify-content-center">
                                        <img src={`http://localhost:90/${flight.image}`} className="img-fluid" style={{ height: "400px" }} />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card card-body h-100 justify-content-center">
                                        <h3 className="text-left-header " >HAMRO FLIGHT</h3>
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
                                                        <div className="col-md-6" >
                                                            <h4 className="font-medium">Arrival </h4>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">{flight.arrival}</h4>
                                                        </div>
                                                    </div>

                                                <div className="row">
                                                        <div className="col-md-6" >
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
                                                    <button onClick={this.deleteFlight.bind(this, flight._id)} className="btn-right btn-danger btn-sm">Delete</button>   
                                                    <button className="btn-left btn-warning btn-sm"><Link to={'/updateFlight/'+flight._id}> Update</Link></button>
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
            )
        }

        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Customer') {
            var show =
                <div>
                    <p></p>

                    {
                        this.state.flights.map((flight) => {
                            return (
                                <div class="container">
                                <div class="row bg-faded">
                                    <div class="col-md-4">
                                        <div class="card card-body h-100 justify-content-center">
                                        <img src={`http://localhost:90/${flight.image}`} className="img-fluid" style={{ height: "400px" }} />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card card-body h-100 justify-content-center">
                                        <h3 className="text-left-header " >HAMRO FLIGHT</h3>
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
                                                        <div className="col-md-6" >
                                                            <h4 className="font-medium">Arrival </h4>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">{flight.arrival}</h4>
                                                        </div>
                                                    </div>

                                                <div className="row">
                                                        <div className="col-md-6" >
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
                                                    <p><button onClick={this.applyBooking.bind(this, flight._id)} className="btn-book btn-success btn-lg">Book Now</button></p>
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
        }
        else {
            <p>Unauthorized</p>
        }
        return (
            <>
                <Container>
                    <Row>
                        {show}
                        <Col></Col>
                    </Row>
                </Container>
                <Footer />
            </>
        )
    }

}

export default myListings;