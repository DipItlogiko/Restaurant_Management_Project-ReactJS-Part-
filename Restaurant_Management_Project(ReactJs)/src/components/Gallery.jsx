import React from 'react'; ///amader ai react module ar moddhe akta bable name compailer ache jei compailer ar kaj hocche amader jsx file ar moddhe jei HTML code gulo ache oi code guloke javascript aaa compile kore nebe

function Gallery() ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche className component
{
    return(
        <div>    {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}
 
            {/*======= Gallery Section =======*/}
            <section id="gallery" className="gallery">
                <div className="container-fluid">

                <div className="section-title">
                    <h2>Some photos from <span>Our Restaurant</span></h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div className="row g-0">

                    <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                        <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                        </a>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                        <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                        </a>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                        <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                        </a>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                        <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                        </a>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                        <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                        </a>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                        <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                        </a>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                        <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                        </a>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                        <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                        </a>
                    </div>
                    </div>

                </div>

                </div>
            </section>{/*-- End Gallery Section --*/}


        </div>
    );
}


export default Gallery;
