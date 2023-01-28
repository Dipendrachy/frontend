import React, { Component } from "react";
import Footer from '../Layout/Footer/Footer';
const axios =require('axios').default;


export default class showMyBookings extends Component {
    state = {
        query:'',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
      }
  
      inputHandler = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }
      Feedbackaddmethod = (e) => {
          e.preventDefault()
  
          axios({
              method: 'post',
              url: 'http://localhost:90/contact',
              data: this.state,
  
              headers: { 
                'authorization': `Bearer ${localStorage.getItem('token')}`}
          })
  
              .then(response => {
                  console.log(response);
                  alert("Feedback has been added")
              })
              .catch(err => {
                  console.log(err.response);
                  alert("Error adding Feedback")
              })
  
  
  
  
      };


    render() {
        return (
            <>
            <div className="auth-inner-contact">
{/* <div class="container-contact"> */}
                <div class="row-contact">
                    <div class="col-md-3">
                        <div class="contact-info">
                            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                            <h2>Contact Us</h2>
                            <h4>We would love to hear from you !</h4>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="contact-form">
                            <div class="form-group-contact">
                                <label class="control-label col-sm-2" for="fname">First Name:</label>
                                <div class="contact-form col-sm-10">
                                    <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
                          </div>
                                </div>
                                <div class="form-group-contact">
                                    <label class="control-label col-sm-2" for="lname">Last Name:</label>
                                    <div class="contact-form col-sm-10">
                                        <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
                          </div>
                                    </div>
                                    <div class="form-group-contact">
                                        <label class="control-label col-sm-2" for="email">Email:</label>
                                        <div class="contact-form col-sm-10">
                                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                          </div>
                                        </div>
                                        <div class="form-group-contact">
                                            <label class="control-label col-sm-2" for="comment">Comment:</label>
                                            <div class="contact-form col-sm-10">
                                                <textarea class="form-control" rows="5" id="comment" value={this.state.query} name="query" onChange={this.inputHandler}></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group-contact">
                                            <div class="contact-form col-sm-offset-2 col-sm-10">
                                                <button type="submit" class="btn btn-default"  onClick={this.Feedbackaddmethod}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
            </div>
            <Footer/>
            </>
        )
    }

}