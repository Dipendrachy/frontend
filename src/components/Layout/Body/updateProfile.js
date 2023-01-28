import React, { Component } from "react";
import Footer from '../../Layout/Footer/Footer';
const axios = require("axios").default;

export default class updateProfile extends Component {
    state = {
        username: '',
        email: '',
        phone: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    async componentDidMount() {

        await axios({
            method: 'get',
            url: 'http://localhost:90/user/showProfile',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                // console.log("Data")
                console.log(response.data.data);

                this.setState({
                    username: response.data.username,
                    email: response.data.email,
                    phone: response.data.phone,


                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }

    updateProfile = (e) => {
        e.preventDefault()
      
        axios({
            method: 'put',
            url: 'http://localhost:90/user/update/' + this.state.id,
            data: this.state,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                alert("update successfull")
                window.location.href='/profile'
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
            <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row  d-flex justify-content-center">
                    <div class="col-xl-6 col-md-12">
                        <div class="card user-card-full">
                            <div class="row m-l-0 m-r-0">
                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                    <div class="card-block text-center text-white">
                                        <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                        <input className="form-control" type="text" value={this.state.username} name="username" onChange={this.changeHandler} />
                                        {/* <h6 class="f-w-600">{this.state.profile.username}</h6> */}
                                        <p>Customer</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">User Information</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Email</p>
                                                <input className="form-control" type="text" value={this.state.email} name="email" onChange={this.changeHandler} />
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Phone</p>
                                                <input className="form-control" type="text" value={this.state.phone} name="phone" onChange={this.changeHandler} />
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
                                        <button onClick={this.updateProfile} className="btn-edit btn-success">Apply</button>
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
        <Footer/>
        </>
        )
    }

}