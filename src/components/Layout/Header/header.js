import { Component } from "react";
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        if(localStorage.getItem('token') && localStorage.getItem('role')==='Company')
        {
            var menu = 
            <div>
            <Link to="/">Home for company</Link> 
            <Link to='/myboking'>Show all Flight</Link> 
            <Link to='/addflight'>Add Flight</Link> 
            
            
            </div>
        }
        else if(localStorage.getItem('token') && localStorage.getItem('role')==='Customer'){
            <div>
            <Link to='/booking'>Booking</Link> 
            <Link to='/service'>Services</Link> 
            <Link to='/logout'>Logout</Link> 
            <Link to="/">Home FOR CUSTOMER</Link> 
   
            </div> 
        }
        else{
            var menu =
            <div>
            <Link to="/">Home empty</Link>  
            <Link to="/register">REGISTER</Link>  
            <Link to='/login'>Login</Link> 
            <Link to='/service'>Services</Link> 
            
            </div>
        }
        return(
            <div>
               
                {menu}

              
                </div>
        )
    }
}
export default Header;