import React, { Component } from 'react';
import Footer from '../Layout/Footer/Footer';
const axios = require('axios').default;



class addFlight extends Component {
    state = {
        cname: '',
        depature: '',
        arrival: '',
        duration: '',
        price: '',
        image: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   

    flightAddMethod = (e) => {


        e.preventDefault()

        const formData = new FormData()
         var images = this.refs.image.files[0];
        formData.append('cname', this.state.cname)
        formData.append('depature', this.state.depature)
        formData.append('arrival', this.state.arrival)
        formData.append('duration', this.state.duration)
        formData.append('price', this.state.price)
        formData.append("image",images)

        axios({
            method: 'post',
            url: 'http://localhost:90/addFlight/insert',
            data: formData,
            headers: {
                'Accept':'multipart/form-data',
                'authorization': `Bearer ${localStorage.getItem('token')}` }
        })

            .then(response => {
                console.log(response);
                alert("Flight has been added.")
            })
            .catch(err => {
                console.log(err.response);
                alert("Error adding Flight.")
            })


    };
    render() {
        return (
            <>
            <div className="auth-wrapper">
                <div className="auth-inner-addform">
                    <div>
                    <div className="header-middle">
                            FLIGHT ADD
                            </div>
                        <form>
                            <div className="form-group">
                               
                                <input className="form-control" type="text" value={this.state.cname} name="cname" placeholder="Enter Distination" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                          
                                <input className="form-control" type="text" value={this.state.depature} name="depature" placeholder="Enter Depature Time" onChange={this.inputHandler} />
                            </div>
                                
                            <div className="form-group">
                          
                                <input className="form-control" type="text" value={this.state.arrival} name="arrival" placeholder="Enter Arrival Time" onChange={this.inputHandler} />
                            
                            </div>
                                

                            <div className="form-group">
                              
                                <input className="form-control" type="time" value={this.state.duration} name="duration" placeholder="Enter Duration" onChange={this.inputHandler} />
                            </div>
                            <div className="form-group">
                               
                                <input className="form-control" type="text" value={this.state.price} name="price" placeholder="Enter Price" onChange={this.inputHandler} />
                            </div>
                            <div className="form-group">
                              
                                <input className="form-control-img" type="file" ref="image" name="image"  />
                            </div>
                                
                            <p>
                                <button variant="secondary" className="btn btn-primary btn-block" onClick={this.flightAddMethod}>Add Flight</button>

                            </p>
                        </form>

                    </div>
                </div>
            </div>
            <Footer/>
            </>
        )
    }

}

export default addFlight;