import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';

const axios = require('axios').default;

class ShowAllHotel extends Component {
    state = {
        hotels: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:90/addHotel/showall',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                // console.log("Data")
                console.log(response.data.data);

                this.setState({
                    hotels: response.data.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    deleteHotel = (id) => {
        axios.delete('http://localhost:90/addHotel/delete/' + id, this.state.config)
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

    updateHotel = (e) => {
        e.preventDefault()

        axios({
            method: 'put',
            data: this.state,
            url: 'http://localhost:90/addHotel/update',
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

    applyHotelBooking = (id) => {
        // alert(id)
        axios({
            method: 'post',
            url: 'http://localhost:90/hotel/insert/'+id,
            // data: id,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                alert("Hotel Booking apply successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("Hotel Booking apply unsuccessfull")
            })
    }


    render() {
        if (localStorage.getItem('token') && localStorage.getItem('role') === 'Company') {
            var show = (
                <div>
                    {
                        this.state.hotels.map((hotel) => {
                            return (
                            <div class="container">
                                    <div class="row bg-faded">
                                        <div class="col-md-4">
                                            <div class="card card-body h-100 justify-content-center">
                                            <img src={`http://localhost:90/${hotel.himage}`} className="img-fluid" style={{ width: "350px" ,height: "400px" }} />
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card card-body h-100 justify-content-center">
                                            <h3 className="text-left-header " >HAMRO HOTEL</h3>
                                            <p className="p-2 text-left font-medium">
                                                        T{hotel.description}
                                                        </p>

                                                    <div className=" p-4 details-header mt-4">

                                                        <h2 className=" ml-3">{hotel.hname}</h2>
                                                    </div>
                                                    <div className=" p-4 details-header mt-4">
                                                    </div>
                                                    <div className="details-body mx-4 p-3">
                                                    <div className="row">
                                                            <div className="col-md-6" >
                                                                <h4 className="font-medium">Location </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">Kathmandu, Thamel</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">Price </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">{hotel.hprice}</h4>
                                                            </div>
                                                        </div>
                                                        <hr></hr>
                                                        <button onClick={this.deleteHotel.bind(this, hotel._id)} className="btn-right btn-danger btn-sm">Delete</button>
                                                        
                                                        <button className="btn-left btn-warning btn-sm"><Link to={'/updateHotel/'+hotel._id}> Update</Link></button>
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
                        this.state.hotels.map((hotel) => {
                            return (

                                <div class="container">
                                    <div class="row bg-faded">
                                        <div class="col-md-4">
                                            <div class="card card-body h-100 justify-content-center">
                                            <img src={`http://localhost:90/${hotel.himage}`} className="img-fluid" style={{ width: "350px" ,height: "400px" }} />
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card card-body h-100 justify-content-center">
                                            <h3 className="text-left-header " >HAMRO HOTEL</h3>
                                            <p className="p-2 text-left font-medium">
                                                        T{hotel.description}
                                                        </p>

                                                    <div className=" p-4 details-header mt-4">

                                                        <h2 className=" ml-3">{hotel.hname}</h2>
                                                    </div>
                                                    <div className=" p-4 details-header mt-4">
                                                    </div>
                                                    <div className="details-body mx-4 p-3">
                                                    <div className="row">
                                                            <div className="col-md-6" >
                                                                <h4 className="font-medium">Location </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">Kathmandu, Thamel</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">Price </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">{hotel.hprice}</h4>
                                                            </div>
                                                        </div>
                                                        <hr></hr>
                                                        <p><button onClick={this.applyHotelBooking.bind(this, hotel._id)} className="btn-book btn-success btn-lg">Book Now</button></p>
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

export default ShowAllHotel;