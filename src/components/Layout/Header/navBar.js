import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navigationbar() {


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/demo';
  };


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  // const { auth } = this.props

  // var pageTitle = `Welcome, { auth.email }`

  // return (
  //    <h1>{ pageTitle }</h1>
  // )


  return (
    <>
      {/* <Header></Header> */}

      {/* FOR COMPANY */}
      <div>
        {localStorage.getItem('token') && localStorage.getItem('role') === 'Company'
          ? (<div>
            <nav className='navbar'>
              <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  HAMRO FLIGHT
                  {/* <i class='fab fa-typo3' /> */}
                  <i class="fas fa-paper-plane"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/about'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='/addhotel'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Add Hotel
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      to='/showallflight'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Show Flight
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      to='/showallhotel'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Show Hotel
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      to='/addflight'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Add Flight
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      to='/viewContact'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Show Feedback
                    </Link>
                  </li>


                </ul>

                <div className='dropMenu'>
                  <div className="Dropdown">
                    <Dropdown >
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        USER LOGIN
                      </Dropdown.Toggle>

                      <Dropdown.Menu>


                        <Link
                          className="nav-link"
                          onClick={logout}>
                          Logout
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

              </div>
            </nav>
          </div>)

          // ..........FOR CUSTOMER....................
          : localStorage.getItem('token') && localStorage.getItem('role') === 'Customer'
            ? (<div>
              <nav className='navbar'>
                <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    HAMRO FLIGHT
                    {/* <i class='fab fa-typo3' /> */}
                    <i class="fas fa-paper-plane"></i>
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/showMyBookings'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        myBooking
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/showallflight'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        Show Flight
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/showallhotel'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        Show Hotel
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/about'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        About Us
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/contact'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        Contact
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/profile'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        Profile
                      </Link>
                    </li>


                  </ul>
                  {/* {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}  */}
                  <div className='dropMenu'>
                    <div className="Dropdown">
                      <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          USER LOGIN
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Link
                            className="nav-link"
                            onClick={logout}>
                            Logout
                          </Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </nav>
            </div>)

            // ...........FOR NON USER..............
            : (<div>
              <nav className='navbar'>
                <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    HAMRO FLIGHT
                    {/* <i class='fab fa-typo3' /> */}
                    <i class="fas fa-paper-plane"></i>
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        to='/service'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        Services
                      </Link>
                    </li>


                    <li className='nav-item'>
                      <Link
                        to='/showAllFlight'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        Show Flight
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/about'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        About Us
                      </Link>
                    </li>



                    <li>
                      <Link
                        to='/login'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                  {/* {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}  */}
                  <div className='dropMenu'>
                    <div className="Dropdown">
                      <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          USER LOGIN
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Link
                            className="nav-link"
                            to="/login">
                            Login
                          </Link>
                          <Link
                            className="nav-link"
                            to="/signup">
                            Register
                          </Link>

                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </nav>
            </div>)
        }
      </div>




    </>
  );
}

export default Navigationbar;
