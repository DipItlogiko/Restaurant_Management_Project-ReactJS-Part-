import React from 'react';  /// akhane amader react module ar moddhe akta bable name compiler  ache ai bable compiler ar kaj hocche amader jsx file ar moddh joto html ar code thakbe oi code guloke javascript aa compile korbe...

function Events() ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
{
    return(
        <div>     {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe  karon amader return/render akta element eee receive kore tai amra amader multiple element ke <div></div> ba <></> ar moddhe rekhe debo */}
  
            {/*======= Events Section =======*/} 
            <section id="events" className="events">
                <div className="container">

                <div className="section-title">
                    <h2>Organize Your <span>Events</span> in our Restaurant</h2>
                </div>

                <div className="events-slider swiper">
                    <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="row event-item">
                        <div className="col-lg-6">
                            <img src="assets/img/event-birthday.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Birthday Parties</h3>
                            <div className="price">
                            <p><span>$189</span></p>
                            </div>
                            <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <ul>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                        </div>
                        </div>
                    </div>{/*-- End testimonial item --*/}

                    <div className="swiper-slide">
                        <div className="row event-item">
                        <div className="col-lg-6">
                            <img src="assets/img/event-private.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Private Parties</h3>
                            <div className="price">
                            <p><span>$290</span></p>
                            </div>
                            <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <ul>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                        </div>
                        </div>
                    </div>{/*-- End testimonial item --*/}

                    <div className="swiper-slide">
                        <div className="row event-item">
                        <div className="col-lg-6">
                            <img src="assets/img/event-custom.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Custom Parties</h3>
                            <div className="price">
                            <p><span>$99</span></p>
                            </div>
                            <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <ul>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                        </div>
                        </div>
                    </div>{/*-- End testimonial item --*/}

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                </div>
            </section>{/*-- End Events Section --*/}


        </div>
    );
}

export default  Events;