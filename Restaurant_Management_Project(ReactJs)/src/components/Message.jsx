import React from "react"; /// akhane amder react module ar moddhe babol nam aa akta compailer ache ai compailer ta amader jsx file ar sob html code ke javascript a compaile kore..

function Message() ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche className component
{
    return(
        <div>  {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}


            {/*======= Contact Section =======*/}
                <section id="contact" className="contact">
                {/* @if($authUser && $authUser->user_type == '0') <!--akhane ami akta condition diyechi je amader HomeController theke home.blade.php file ar moddhe jei authUser name variable ta ashche oi variable ar moddhe jodi data thake tahole if condition ar moddhe code gulo execute hobe mane kono user jodi Authentication complete kore mane signup and signin kore amader application ar moddhe ashe and oi authUser ba authenticated user ar user_type jodi '0' hoy mane oi user ta jodi general user hoy tahole oi user table book korte parbe kintu kono Admin aikhan theke table book korte parbe na karon amader Admin ar user_type ta hobe '1' tai ...&& aita mane hocche and jodi 2 pasher sorto mile taholei if ar moddher condition ta execute hobe ta chara hobe na && ai and ar kaj hocche or 2 pasher sorto na mille oo if ar moddher code read kore na and execute ooo kore na-----> */}
                    <div className="container">
                        
                        <div className="section-title">
                        <h2><span>Contact</span> Us</h2>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                        </div>
                    </div>

                    <div className="map">
                        <iframe style={{border:'0', width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"   allowFullScreen></iframe>
                    </div>

                    <div className="container mt-5">

                        <div className="info-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 info">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>A108 Adam Street<br/>New York, NY 535022</p>
                            </div>

                            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i className="bi bi-clock"></i>
                            <h4>Open Hours:</h4>
                            <p>Monday-Saturday:<br/>11:00 AM - 2300 PM</p>
                            </div>

                            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com<br/>contact@example.com</p>
                            </div>

                            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
                            </div>
                        </div>
                        </div>

                        <form action="#" method="POST">
                        {/* @csrf */}
                        <div className="php-email-form">
                            <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" value="" placeholder="Your Name" readOnly />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" value=""  placeholder="Your Email" readOnly />
                            </div>
                            </div>
                            <div className="form-group mt-3"></div>
                            <div className="form-group mt-3">
                            {/* <span className="text-danger">
                                @error('message')
                                    {{ $message }}
                                @enderror
                            </span> */}
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required>{/* {{ old('message') }}*/}</textarea> 
                            </div>           
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </div>
                        
                        </form>

                    </div>
                 
                {/* @endif */}
                </section>
            {/* End Contact Section   */}


        </div>
    );
}

export default Message;