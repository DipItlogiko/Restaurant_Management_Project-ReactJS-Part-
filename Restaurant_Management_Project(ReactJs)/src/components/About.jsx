import React from 'react';

function About()   ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
{
    return(
        <div>       {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe  karon amader return/render akta element eee receive kore tai amra amader multiple element ke <div></div> ba <></> ar moddhe rekhe debo */}

        {/*======= About Section =======*/}
        <section id="about" className="about">
            <div className="container-fluid">

            <div className="row">

                <div className="col-lg-5 align-items-stretch video-box" style={{ backgroundImage: "url(assets/img/about.jpg)"}}>
                <a href="https://www.youtube.com/watch?v=S-uAsMf1__E" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                </div>

                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

                <div className="content">
                    <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                    <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <ul>
                    <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>

                </div>

            </div>

            </div>
        </section>{/*-- End About Section --*/}

    </div>
    );
}

export default About;