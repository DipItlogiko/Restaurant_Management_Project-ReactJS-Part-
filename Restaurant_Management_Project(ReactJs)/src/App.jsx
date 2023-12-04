import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Events from "./components/Events";
import BookTable from "./components/BookTable";
import Gallery from "./components/Gallery";
import Chef from "./components/Chef";
import Testimonial from "./components/Testimonial";
import Message from "./components/Message";
import Footer from "./components/Footer";


function App(){
    return(
   
      <div>
        <TopBar />
        <NavBar />
        <HeroSection />
        <main id="main">          
        <About />
        <WhyChooseUs />
        <Menu />
        <Specials />
        <Events />
        <BookTable />
        <Gallery />
        <Chef />
        <Testimonial />
        <Message />          
        </main>
        <Footer />
         
      </div>
 
    );
}

export default App;