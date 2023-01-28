import React from 'react'
import {Switch, Route,} from 'react-router-dom';
import Navigationbar from '../components/Layout/Header/navBar';
import Login from '../components/Layout/Body/login';
import HomePage from '../components/Pages/Home'
import Footer from '../components/Layout/Footer/Footer';
import Service from '../components/Pages/Service';
import About from '../components/Pages/About';
import Signup from '../components/Layout/Body/Signup';
import AddFlight from '../components/Company/AddFight';
import AddHotel from '../components/Company/AddHotel';
import showAllFlight from '../components/Company/ShowAllFlight';
import showAllHotel from '../components/Company/ShowAllHotel';
import updateFlight from '../components/Company/updateFlight';
import updateHotel from '../components/Company/updateHotel';
import Header from '../components/Layout/Header/header';
import Contact from '../components/Pages/Contact';
import viewContact from '../components/Company/viewContact';

import AdminLogin from '../components/Layout/Adminpannel/Adminlogin';
import DashboardCharts from '../components/Layout/Adminpannel/Admindashboard';
import {withRouter} from 'react-router-dom';
import showMyBookings from '../components/Pages/showMyBookings';
import showMyHotelBookings from '../components/Pages/showMyHotelBookings';
import profile from '../components/Layout/Body/profile';
import updateProfile from '../components/Layout/Body/updateProfile';
import demo from '../components/Layout/Body/demo';



const Routes = ({location}) => {

    const checkRoute = () => {
        
        const splitLocation = location.pathname.split("/")
            if(splitLocation.length > 1){
                    if( splitLocation[1] === "admin"){
                        return true;
                    }
            }

            return false;
    }

    return (
        <>
          {  checkRoute()}
            {!checkRoute() && <Navigationbar/>}
        <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route path = "/login" component = {Login}/>
            <Route path ="/Service" component = {Service}/>
            <Route path ="/showMyBookings" component = {showMyBookings}/>
            <Route path ="/showMyHotelBookings" component = {showMyHotelBookings}/>
            <Route path ="/addflight" component = {AddFlight}/>
            <Route path ="/addhotel" component = {AddHotel}/>
            <Route path ="/showallflight" component = {showAllFlight}/>
            <Route path ="/showallhotel" component = {showAllHotel}/>
            <Route path ="/updateFlight/:id" component = {updateFlight}/>
            <Route path ="/updateHotel/:id" component = {updateHotel}/>
            <Route path ="/about" component = {About}/>
            <Route path ="/Signup" component = {Signup}/>
            <Route path ="/header" component = {Header}/>
            <Route path ="/profile" component = {profile}/>
            <Route path ="/updateProfile/:id" component = {updateProfile}/>
            <Route path ="/demo" component = {demo}/>
            <Route path ="/contact" component = {Contact}/>
            <Route path ="/viewContact" component = {viewContact}/>


        


            {/* For Admin */}
            <Route path = "/admin/" render={({ location, history }) => (
                <main id = "wrapper" className = "wrapper">
                              
                <Route path="/admin/" exact component={AdminLogin} />
                <Route path="/admin/dashboard" component={DashboardCharts}/>
                    

            </main>
            )}/>
        </Switch>
        {!checkRoute && "/admin'" && <Footer/>}
        </>
    )
}


export default withRouter(Routes);
