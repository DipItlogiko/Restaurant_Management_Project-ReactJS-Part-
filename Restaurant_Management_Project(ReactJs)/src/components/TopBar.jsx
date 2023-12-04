import React from "react";

function TopBar() ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
{
    return(
        <div>

           {/*==== Top Bar ====*/}
                <section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent" style={{zIndex: "1000"}}>
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
                        <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
                        <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>SAT-THU: 11:00 AM - 11:00 PM</span></i>
                    </div>
                </section>

        </div>
    );
}

export default TopBar;