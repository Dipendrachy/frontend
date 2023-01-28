import React, { Component } from "react";
import {Link } from 'react-router-dom';
import Footer from '../../Layout/Footer/Footer';
const axios = require("axios").default;

export default class profile extends Component {
    state = {
        profile: {},
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    async componentDidMount() {

        await axios({
            method: 'get',
            url: 'http://localhost:90/user/showProfile',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                // console.log("Data")
                this.setState({
                    profile: response.data.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }
    render() {
        return (
            <>
                <div class="page-content page-container" id="page-content">
                    <div class="padding">
                        <div class="row  d-flex justify-content-center">
                            <div class="col-xl-6 col-md-12">
                                <div class="card user-card-full">
                                    <div class="row m-l-0 m-r-0">
                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                            <div class="card-block text-center text-white">
                                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" /> </div>
                                                <h6 class="f-w-600">{this.state.profile.username}</h6>
                                                <p className="customer">Customer</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                            </div>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="card-block">
                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">User Information</h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Email</p>
                                                        <h6 class="text-muted f-w-400">{this.state.profile.email}</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Phone</p>
                                                        <h6 class="text-muted f-w-400">{this.state.profile.phone}</h6>
                                                    </div>
                                                </div>
                                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Address</p>
                                                        <h6 class="text-muted f-w-400">Kathmandu</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">College</p>
                                                        <h6 class="text-muted f-w-400">Softwarica College of IT & e-commerce</h6>
                                                    </div>
                                                </div>
                                                <div className="btn-edit">
                                                    <button className="btn-edit btn-warning"><Link to={'/updateProfile/'+ this.state.profile._id}>Edit</Link></button>
                                                </div>
                                                <div className="social-group"></div>
                                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

}