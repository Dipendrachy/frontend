import React, { Component } from "react";
import axios from 'axios';
import Footer from '../../Layout/Footer/Footer';

export default class SignUp extends Component {

    state = {
        "username": "",
        "password": "",
        "email": "",
        "phone": "",
        "role": "",
    }

    inputHandler = (e) => {
        this.setState
            ({
                [e.target.name]: e.target.value
            })
    }

    sendUserInfo = (e) => {
        e.preventDefault()

        axios.post("http://localhost:90/user/add", this.state)
            .then(response => {
                // console.log(response);
                alert("You have been registered Successfully")
            })
            .catch(err => {
                console.log(err.response)
                alert("Registration Unsuccessful")
            })

    };


    render() {
        return (
            <>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <div className="header">
                                Sign In
                            </div>

                            <div className="form-group">
                                
                                <input type="text" value={this.state.username} name="username" onChange={this.inputHandler}
                                    className="form-control" placeholder="Enter Username" />
                            </div>

                            <div className="form-group">
                                
                                <input type="password" value={this.state.password} name="password" onChange={this.inputHandler}
                                    className="form-control" placeholder="Enter Password" />
                            </div>

                            <div className="form-group">
                                
                                <input type="text" value={this.state.email} name="email" onChange={this.inputHandler}
                                    className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                              
                                <input type="text" value={this.state.phone} name="phone" onChange={this.inputHandler}
                                    className="form-control" placeholder="Enter Phone Number" />
                            </div>

                            <div className="form-group">
                               
                                <input type="role" value={this.state.role} name="role" onChange={this.inputHandler}
                                    className="form-control" placeholder="Enter Your Role" />
                            </div>


                            <button type="submit" onClick={this.sendUserInfo} className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="http://localhost:3000/login">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}