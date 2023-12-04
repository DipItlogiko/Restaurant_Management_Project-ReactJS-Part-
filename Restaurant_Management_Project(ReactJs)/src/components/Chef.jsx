import React from 'react'; /// akhane amader react module ar moddhe babol nam aaa akta compailer ache ai babol compailer ta amader jsx file ar html code guloke javascript aa compaile kore... 

function Chef()   ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
{
    return(
        <div>    {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}

            {/*======= Chefs Section =======*/}
            <section id="chefs" className="chefs">
                <div className="container">

                <div className="section-title">
                    <h2>Our Proffesional <span>Chefs</span></h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div className="row">
                {/* @foreach($chefs as $chef)
                    <div className="col-lg-4 col-md-6">
                    <div className="member mt-3">
                        <div className="pic"><img src="Chefs_images/{{ $chef->image }}" className="img-fluid" alt=""></div>
                        <div className="member-info">
                        <h4>{{ $chef->name }}</h4>
                        <span>{{ $chef->position }}</span>
                        <div className="social">
                            <a href="{{ $chef->twitter }}"><i className="bi bi-twitter"></i></a>
                            <a href="{{ $chef->facebook }}"><i className="bi bi-facebook"></i></a>
                            <a href="{{ $chef->instagraam }}"><i className="bi bi-instagram"></i></a>
                            <a href="{{ $chef->linkedin }}"><i className="bi bi-linkedin"></i></a>
                        </div>
                        </div>
                    </div>
                    </div>         
                @endforeach  */}
                </div>

                </div>
            </section>{/*-- End Chefs Section --*/}


        </div>
    );
}


export default Chef;