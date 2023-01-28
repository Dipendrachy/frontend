import React, { Component } from 'react';
import Footer from '../Layout/Footer/Footer';
const axios = require('axios').default;



class addHotel extends Component {
    state = {
        himage: '',
        hname: '',
        description: '',
        hprice: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    inputHandler = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   

    hotelAddMethod = (e) => {
        e.preventDefault()

        const formData = new FormData()
        var himages = this.refs.himage.files[0];
        formData.append('hname', this.state.hname)
        formData.append('description', this.state.description)
        formData.append('hprice', this.state.hprice)
        formData.append("himage",himages)

        axios({
            method: 'post',
            url: 'http://localhost:90/addHotel/insert',
            data: formData,
            headers: {
                'Accept':'multipart/form-data',
                'authorization': `Bearer ${localStorage.getItem('token')}` }
        })

            .then(response => {
                console.log(response);
                alert("Hotel has been added.")
            })
            .catch(err => {
                console.log(err.response);
                alert("Error adding Hotel.")
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
                               
                                <input className="form-control" type="text" value={this.state.hname} name="hname" placeholder="Enter Hotel Name" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                          
                                <input className="form-control" type="text" value={this.state.description} name="description" placeholder="Enter Description" onChange={this.inputHandler} />
                            </div>
                                
                            <div className="form-group">
                          
                                <input className="form-control" type="text" value={this.state.hprice} name="hprice" placeholder="Enter Price" onChange={this.inputHandler} />
                            
                            </div>
        
                            <div className="form-group">
                              
                                <input className="form-control-img" type="file" ref="himage" name="himage"  />
                            </div>
                                
                            <p>
                                <button variant="secondary" className="btn btn-primary btn-block" onClick={this.hotelAddMethod}>Add Hotel</button>

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

export default addHotel;