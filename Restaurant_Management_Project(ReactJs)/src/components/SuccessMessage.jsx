import React , { useEffect } from "react"; //// akhane amra react module theke useEffect hook ta use korechi amader Aleart auto close ar animation ta dekhanor jonno

function SuccessMessage(props)     ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
{

    useEffect(()=> {
        // Get all elements with class "auto-close"
        const autoCloseElements = document.querySelectorAll(".auto-close");
    
        // Define a function to handle the fading and sliding animation
        function fadeAndSlide(element) {
          const fadeDuration = 500;
          const slideDuration = 500;
    
          // Step 1: Fade out the element
          let opacity = 1;
          const fadeInterval = setInterval(function () {
            if (opacity > 0) {
              opacity -= 0.1;
              element.style.opacity = opacity;
            } else {
              clearInterval(fadeInterval);
              // Step 2: Slide up the element
              let height = element.offsetHeight;
              const slideInterval = setInterval(function () {
                if (height > 0) {
                  height -= 10;
                  element.style.height = height + "px";
                } else {
                  clearInterval(slideInterval);
                  // Step 3: Remove the element from the DOM
                  element.parentNode.removeChild(element);
                }
              }, slideDuration / 10);
            }
          }, fadeDuration / 10);
        }
    
        // Set a timeout to execute the animation after 5000 milliseconds (5 seconds)
        const timeoutId = setTimeout(() => {
          autoCloseElements.forEach((element) => {
            fadeAndSlide(element);
          });
        }, 5000);
    
        // Clear the timeout on component unmount to avoid memory leaks
        return () => clearTimeout(timeoutId);
      }, []); // Empty dependency array to run the effect only once on mount





    const { success } = props;    /// akhane amader props ar moddhe jehetu object aakare data ashbe tai amra amader props ar value take distructuring korar somoy amader variable ar nam guloke { } carly braces ar moddhe rekhechi amader variable ar nam dewar aage akta jinish mathai rakhte hobe je amra amader ai SuccessMessage component ke call kore jokhon oi component ar moddhe amra data pass korbo key value hishebe tokhon oikhane key ar nam jeita dibo oi same name amader ai khane distructuring korar somoy amader { } ar moddhe variable ar nam oita diye dite hobe...jodi amader props ar moddhe array aakare data ashe tahole amader props ar value distructuring korar somoy variable gulo ke [ ] ar moddhe rakhte hobe 
    return(
        <div>    {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}
        
 
        {/*--======= FLASH MESSAGE =========--*/}        

        {/* i have used bootstrap5 aleart to show our FLASH MESSAGE */}
        {/*--(tickmark icon)--*/}
        <svg xmlns="http://www.w3.org/2000/svg" style={{display : "none"}}>
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>                           
        </svg>
            
            {{/*--(aleart)--*/}}
            <div className="auto-close alert alert-success d-flex align-items-center" role="alert" style={{ zIndex: '5000'}}>
                <svg className="bi flex-shrink-0 me-2 text-success" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                    {success}
                </div>
                <button type="button" className="btn-close" style={{marginLeft: "auto"}} data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        {{/*======= END FLASH MESSAGE =========--*/}}

    </div>
    );
}

export default SuccessMessage;