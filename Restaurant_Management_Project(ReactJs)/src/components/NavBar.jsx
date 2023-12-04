import React from 'react';

function NavBar()  ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
{
    return(
        <div>  {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}
           
            {/*======= Header =======*/}
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <div className="logo me-auto">
                <h1><a href="#">McDonald's</a></h1>
                
                </div>

                <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                    <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
                    <li><a className="nav-link scrollto" href="#events">Events</a></li>
                    <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
                    <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                
                     
                        
                        {/* @if (Route::has('login'))
                        
                            @auth
                            <li className="dropdown"><a href="#"><span>{{ Auth::user()->name }}</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                <a href="{{ route('dashboard') }}">Dashboard</a>      
                                
                                </ul>
                            @else

                            <li className="dropdown"><a href="#"><span>SignUp/SignIn</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <a href="{{ route('login') }}" >SignIn</a>

                                @if (Route::has('register'))
                                    <a href="{{ route('register') }}">SignUp</a>
                                @endif
                            </ul>    
                            </li>  
                            @endauth
            
                    @endif
                    
                    </li> */}
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>{/*--end navbar --*/}

                <a href="#book-a-table" className="book-a-table-btn scrollto">Book a table</a>

            </div>
            </header>{/*-- End Header --*/}

        </div>
    );
}

export default NavBar;