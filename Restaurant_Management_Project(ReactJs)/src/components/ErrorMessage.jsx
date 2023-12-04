import React, { useEffect } from 'react';   ///akhane amra react module theke useEffect hook take use korechi amader aleart ar auto close ar animition ta dekhanor jonno...

function ErrorMessage(props)     ///aita hocche amader functional Component.......amra jani amader  component 2 dhoroner akta hocche functional Component and r akta hocche class component
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




    const { errorMessage } = props;    /// akhane amader props ar moddhe jehetu object aakare data ashbe tai amra amader props ar value take distructuring korar somoy amader variable ar nam guloke { } carly braces ar moddhe rekhechi amader variable ar nam dewar aage akta jinish mathai rakhte hobe je amra amader ai ErrorMessage component ke call kore jokhon oi component ar moddhe amra data pass korbo key value hishebe tokhon oikhane key ar nam jeita dibo oi same name amader ai khane distructuring korar somoy amader { } ar moddhe variable ar nam oita diye dite hobe...jodi amader props ar moddhe array aakare data ashe tahole amader props ar value distructuring korar somoy variable gulo ke [ ] ar moddhe rakhte hobe 
    return(
        <div>    {/* Amader return/render ar moddhe jodi oonek gulo element thake tahole amader oi element guloke <div></div> ba <></> ar moddhe rakhte hobe */}

            {/*==== Danger Flash Message ====*/}            

            {/*--(i have used bootstrap5 aleart to show our FLASH MESSAGE)--*/} 
            {/*--(triangle icon)--*/} 
            <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>                           
            </svg>
                
                {{/*--(aleart)--*/}}
                <div className="auto-close alert alert-danger d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <div>
                        {errorMessage}
                    </div>
                    <button type="button" className="btn-close" style={{marginLeft: "auto"}}  data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                
             

            {/*==== End Danger Flash Message ====*/}

        </div>
    );
}

export default ErrorMessage;