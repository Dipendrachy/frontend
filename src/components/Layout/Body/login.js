import React, { Component } from "react";
import axios from 'axios';
import  './demo.css';


export default class Login extends Component {
    state = {
        email: '',
        password: '',
        loginChk: false
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitUser = (e) => {
        e.preventDefault();

        axios.post('http://localhost:90/user/login', this.state)
            .then((response) => {
                this.setState({
                    loginChk: true
                })
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', response.data.role)
                localStorage.setItem('email', response.data.email)
                window.location.href = '/'
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div>
                <section class="sign-in">
                    <div class="container-login">
                        <div class="signin-content">
                            <div class="signin-image">
                                <figure><img src="image/signin-image.jpg" alt="sing up image" /></figure>
                                <a href="#" class="signup-image-link">Create an account</a>
                            </div>

                            <div class="Login-form">
                                <h2 class="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="login-form">
                                    <div class="form-group">
                                        <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="email" placeholder="Enter email" value={this.state.account_email} onChange={this.inputHandler} />
                                    </div>
                                    <div class="form-group">
                                        <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.inputHandler} />
                                    </div>
                                    <div class="form-group">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                    <div class="form-group form-button">
                                    <button type="submit" className="btn btn-primary btn-block" onClick={this.submitUser}>Submit</button>
                                    </div>
                                </form>
                                {/* <div class="social-login">
                                    <span class="social-label">Or login with</span>
                                    <ul class="socials">
                                        <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                        <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}