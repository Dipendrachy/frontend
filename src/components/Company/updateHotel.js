import React, { Component} from 'react';
import { Container, Row} from 'react-bootstrap';
import Footer from '../Layout/Footer/Footer';
const axios = require('axios').default;

class updateHotel extends Component {
    state = {
        hname: '',
        description: '',
        hprice: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:90/addHotel/single/' + this.state.id,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response.data.data);

                this.setState({
                    hname: response.data.hname,
                    description: response.data.description,
                    hprice: response.data.hprice,


                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }



    updateHotel = (e) => {
        e.preventDefault()
        alert(this.state.price)
        axios({
            method: 'put',
            url: 'http://localhost:90/addHotel/update/' + this.state.id,
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
                            <h1>Update Hotel</h1>
                            <div className="form-group">
                                
                                <input className="form-control" type="text" value={this.state.hname} name="hname" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                               
                                <input className="form-control" type="text" value={this.state.description} name="description" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                               
                                <input className="form-control" type="text" value={this.state.hprice} name="hprice" onChange={this.changeHandler} />
                            </div>
                            <p>
                                <button onClick={this.updateHotel}  className="btn-right btn-warning btn-lg">Update</button>
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

export default updateHotel;