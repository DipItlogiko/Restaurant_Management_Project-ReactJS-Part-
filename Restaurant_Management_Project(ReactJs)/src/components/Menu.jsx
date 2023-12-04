import React from 'react';

function Menu()         ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
{
    return(
        <div>     {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe  karon amader return/render akta element eee receive kore tai amra amader multiple element ke <div></div> ba <></> ar moddhe rekhe debo */}
  
            {/*======= Menu Section =======*/} 
            <section id="menu" className="menu">
            <div className="container">

                <div className="section-title">
                <h2>Check our tasty <span>Menu</span></h2>      
                </div>    

                <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                    <li data-filter="*" className="filter-active">Show All</li>
                    <li data-filter=".filter-fastfood">Fast Food</li>  
                    <li data-filter=".filter-salads">Salads</li>
                    <li data-filter=".filter-sushi">Sushi</li>
                    </ul>
                </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 pt-5 menu-container"> {/*--Akhane g-4 hocche bootstrap ar akta className ai g-4 amader card ar moddhe space add korbe ami g- ar pore joto number likhbo 5 ar moddhe amader card ar ashe pashe toto tuku space add hoy jabe--*/}


                {/* @foreach($allFood as $food)
                    <div className="col menu-item filter-{{ $food->food_type }}">
                        
                        <div className="card">
                        <img src="Food_images/{{ $food->image }}" className="card-img-top" alt="..." style="height: 250px;">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{{ $food->title }}</h5>
                            <p className="card-text menu-ingredients">{{ $food->description }}</p>
                        </div>
                        <div className="mb-5 d-flex justify-content-around">
                            <h3 style="color:#5f5950">$ {{ $food->price }}</h3>
                            <a href="{{ route('food.cart',$food->id) }}" className="book-a-table-btn">Buy Now</a> <!--jokhon kew amader application ar moddhe Buy Now button a click korbe tokhon amader route/web.php ar moddhe food.cart name route ar moddhe jabe tar sathe $food->id take oo niye jabe-------->
                        </div>
                    </div>                  
                    </div>

                @endforeach    */}

                </div>

            </div>
            </section> {/*-- End Menu Section --*/}
   

        </div>
    );
}

export default Menu;