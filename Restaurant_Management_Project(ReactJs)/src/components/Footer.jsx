import React from "react";

function  Footer()
{
    return (
        <div>  {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}
        
        {/*======= Footer ======= --*/}
            <footer id="footer">
            <div className="container">
                <h3>McDonald's</h3>
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                <div className="social-links">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>


                <div className="copyright">
                &copy; Copyright <strong><span>McDonald's</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                
                Designed by  <a href="#">Dip</a>   
                </div>
            </div>
            </footer>
        

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    );
}

export default Footer;