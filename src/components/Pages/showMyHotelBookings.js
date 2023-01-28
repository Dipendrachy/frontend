import React, { Component } from 'react';
import { Container, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';

const axios = require('axios').default;

class showMyHotelBookings extends Component {
    state = {
        hotels: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:90/hotel/showMyHotelBookings',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                // console.log("Data")
                this.setState({
                    hotels: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    deleteHotelBooking = (id) => {
        axios.delete('http://localhost:90/hotel/delete/' + id, this.state.config)
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
                                this.state.hotels.map((hotel) => {
                                    return (

                                        <div>
                                <div className="auth-wrapper-company">
                                    <div className="auth-inner-company">
                                        <div className="container-fluid mt-5 screenFit">
                                            <div className="row ">
                                                <div className="col-md-12">
                                                    <div className="p-3 bg-green">
                                                        <h3 className="text-left-header">HAMRO HOTEL</h3>
                                                        <div>
                                                            
                                            <img src={`http://localhost:90/${hotel.hotelid.himage}`} alt="" className="img-fluid" style={{ height: "400px" }} />
                                                </div>
                                                    </div>
                                                    
                                                    <hr></hr>
                                                    <p className="p-2 text-left font-medium">
                                                        The price of our services vary with outlet and time. We currently provideHimalayan Massagein the following outlets:
                                                       
                                                             </p>

                                                    <div className=" p-4 details-header mt-4">

                                                        <h2 className=" ml-3">{hotel.hotelid.hname}</h2>
                                                    </div>
                                                    <div className=" p-4 details-header mt-4">
                                                    </div>
                                                    <div className="details-body mx-4 p-3">
                                                        <div className="row">
                                                            <div className="col-md-6" >
                                                                <h4 className="font-medium">Description </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">{hotel.hotelid.description}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">Price </h4>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="font-medium">{hotel.hotelid.hprice}</h4>
                                                            </div>
                                                        </div>
                                                        <hr></hr>
                                                        <button onClick={this.deleteHotelBooking.bind(this, hotel._id)} className="btn-right btn-danger btn-lg">Delete</button>
                                                        
                                                        <button className="btn-left btn-warning btn-lg"><Link to={'/updateFlight/'+hotel._id}> Update</Link></button>
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

export default showMyHotelBookings;