import React, { Component} from 'react';
const axios = require('axios').default;


class viewContact extends Component{


state = {

    feedback: [],
    config: {
        headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }
}

componentDidMount() {
    axios.get("http://localhost:90/contact/showall",{
        headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    })
        .then((response) => {
            console.log(response)
            this.setState({
                feedback: response.data.data,
            })
        })
        .catch((err) => {
            console.log(err.response);
            alert("Error. Please Login first")
        })
}
    

deletefeedback = (id) => {
    axios({
        method: 'delete',
        url: 'http://localhost:90/contact/delete/' + id,

        headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    })

        .then((response) => {
            console.log(response)
            alert(" Feedback Delete successfull")
            window.location.reload()

        })
        .catch((err) => {
            console.log(err.response)
            alert(" Feedback Delete unsuccessfull")
        })

}

render(){
    return(
        <div div class="container">
            <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Query</th>
                        <th scope="col">Actions </th>
                      </tr>
                    </thead>
                    </table>
        {
            this.state.feedback.map((pack) => {
                return (  
                   
                    <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"></th>
                        <td>{pack.userid?.username}</td>
                        <td>{pack.userid?.email}</td>
                        <td>{pack.query}</td>
                        <td><button class="btn-left btn-danger btn-sm" onClick={this.deletefeedback.bind(this, pack._id)}>Delete</button></td>
                      </tr>                 
                    </tbody>               
                    </table>
                 
                )
            })
        } 
        </div>
    )
}

}
export default viewContact;