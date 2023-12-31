import React from 'react'; /// akhane amder react module ar moddhe babol nam aa akta compailer ache ai compailer ta amader jsx file ar sob html code ke javascript a compaile kore..

function Testimonial()  ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
{
    return (

        <div>   {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}

            {/* ======= Testimonials Section =======  */}
            <section id="testimonials" className="testimonials">
                <div className="container position-relative">

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <div className="stars">
                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                        </div>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        </div>
                    </div> {/*-- End testimonial item --*/}

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <div className="stars">
                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                        </div>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        </div>
                    </div>{/*-- End testimonial item --*/}

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <div className="stars">
                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                        </div>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        </div>
                    </div>{/*-- End testimonial item --*/}

                    

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <div className="stars">
                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                        </div>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        </div>
                    </div>{/*-- End testimonial item --*/}

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                </div>
            </section>{/*-- End Testimonials Section --*/}


        </div>
    );
}
 
export default Testimonial;
