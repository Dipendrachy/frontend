import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Layout/Footer/Footer';

const axios = require('axios').default;

class updateFlight extends Component {
    state = {
        cname: '',
        depature: '',
        arrival: '',
        duration: '',
        price: '',
        image: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:90/addFlight/single/' + this.state.id,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {

                // console.log("Data")
                console.log(response.data.data);

                this.setState({
                    cname: response.data.cname,
                    depature: response.data.depature,
                    arrival: response.data.arrival,
                    duration: response.data.duration,
                    price: response.data.price,
                    image: response.data.image,


                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }



    updateFlight = (e) => {
        e.preventDefault()
        alert(this.state.price)
        axios({
            method: 'put',
            url: 'http://localhost:90/addFlight/update/' + this.state.id,
            data: this.state,
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

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {


        return (
            <>
                <Container>
                    <Row>
                    <div className="auth-wrapper-update">
                    <div className="auth-inner-update">
                        <form>
                            <h1>Update Flight</h1>
                            <div className="form-group">
                                
                                <input className="form-control" type="text" value={this.state.cname} name="cname" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                               
                                <input className="form-control" type="text" value={this.state.depature} name="depature" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                               
                                <input className="form-control" type="text" value={this.state.arrival} name="arrival" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                              
                                <input className="form-control" type="time" value={this.state.duration} name="duration" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" value={this.state.price} name="price" onChange={this.changeHandler} />
                            </div>
                            <p>
                                <button onClick={this.updateFlight}  className="btn-right btn-warning btn-lg">Update</button>
                            </p>
                        </form></div>
                        </div>
                    </Row>
                </Container>
                <Footer />
            </>
        )
    }

}

export default updateFlight;