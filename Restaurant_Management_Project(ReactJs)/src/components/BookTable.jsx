import React from 'react'; /// akhane amader react module ar moddhe akta bable name compiler  ache ai bable compiler ar kaj hocche amader jsx file ar moddh joto html ar code thakbe oi code guloke javascript aa compile korbe...


function BookTable() ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche className component
{
    return(
        <div>  {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe  karon amader return/render akta element eee receive kore tai amra amader multiple element ke <div></div> ba <></> ar moddhe rekhe debo */}

 
            {/*======= Book A Table Section =======*/}
            <section id="book-a-table" className="book-a-table">
                <div className="container"> 

                {/* @if($authUser && $authUser->user_type == '0') <!--akhane ami akta condition diyechi je amader HomeController theke home.blade.php file ar moddhe jei authUser name variable ta ashche oi variable ar moddhe jodi data thake tahole if condition ar moddhe code gulo execute hobe mane kono user jodi Authentication complete kore mane signup and signin kore amader application ar moddhe ashe and oi authUser ba authenticated user ar user_type jodi '0' hoy mane oi user ta jodi general user hoy tahole oi user table book korte parbe kintu kono Admin aikhan theke table book korte parbe na karon amader Admin ar user_type ta hobe '1' tai ...&& aita mane hocche and jodi 2 pasher sorto mile taholei if ar moddher condition ta execute hobe ta chara hobe na && ai and ar kaj hocche or 2 pasher sorto na mille oo if ar moddher code read kore na and execute ooo kore na----->
                    <div className="section-title">
                    <h2>Book a <span>Table</span></h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>

                    <form action="{{ route('book.table') }}" method="POST">
                    @csrf 
                    <div className="php-email-form">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text" name="name" className="form-control" value="{{ old('name',$authUser->name) }}" placeholder="Your Name" readonly>
                            <label for="name">Name</label>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" value="{{ old('email',$authUser->email) }}"  placeholder="Your Email" readonly>
                            <label for="email">Email</label>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">               
                            <input type="text" className="form-control" name="phone" value="{{ old('phone',$authUser->number) }}" placeholder="Your Phone" required>
                            <label for="phone">Phon</label>
                            <span className="text-danger">
                            @error('phone')
                                {{ $message }}
                            @enderror
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">               
                            <input type="time" name="timeFrom" className="form-control" required>
                            <label for="timeFrom">Time(from)</label>
                            <span className="text-danger">
                            @error('timeFrom')
                                {{ $message }}
                            @enderror
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">               
                            <input type="time" className="form-control" name="timeTo" required>
                            <label for="timeTo">Time(to)</label>
                            <span className="text-danger">
                            @error('timeTo')
                                {{ $message }}
                            @enderror
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">                
                            <input type="text" className="form-control" name="nop" placeholder="# of people" required>
                            <label for="name">Number Of People</label>
                            <span className="text-danger">
                            @error('nop')
                                {{ $message }}
                            @enderror
                            </span>
                        </div>

                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <select name="tableName" className="form-select form-control" required>  
                            <option value="">select table...</option>  

                            @foreach($tables as $data)                                                                       
                                <option value="{{ $data->name }}">{{ $data->name }}(capacity:{{ $data->capacity }})</option>                                     
                            @endforeach                                       
                        </select>              
                        <label for="tableName" className="form-label">Available Table</label>
                        </div>
                        
                        </div>
                        <div className="form-group mt-3">              
                        <textarea className="form-control" name="message" rows="5" placeholder="Message">{{ old('message') }}</textarea>    
                        <span className="text-danger">
                            @error('message')
                                {{ $message }}
                            @enderror
                        </span>       
                        </div>        
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </div>
                    </form>
                @else <!--jodi authUser variable ar moddhe kono data na thake tahole else ar moddhe chole ashbe and else ar moddhe jei code tuku ache ai code tuku execute hobe------->
                    <div className="section-title">
                    <h2>Book a <span>Table</span></h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>

                    <form action="{{ route('book.table') }}" method="POST">
                    @csrf 
                    <div className="php-email-form">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text"  className="form-control" placeholder="Your Name" required />
                            <label>Name</label>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control"   placeholder="Your Email" required />
                            <label>Email</label>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="text" className="form-control"  placeholder="Your Phone" required />
                            <label>Phon</label>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="time"  className="form-control" required />
                            <label>Time(from)</label>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="time" className="form-control"  required />
                            <label>Time(to)</label>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="text" className="form-control"  placeholder="# of people" required />
                            <label>Number Of People</label>
                        </div>
                        </div>
                        <div className="form-group mt-3">
                        <textarea className="form-control"  rows="5" placeholder="Message" required></textarea>           
                        </div>        
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </div>
                    </form>
                @endif */}

                

                </div>
            </section>{/*-- End Book A Table Section --*/}  


        </div>
    );
}

export default BookTable;