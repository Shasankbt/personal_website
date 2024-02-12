
document.addEventListener('DOMContentLoaded',function (){
    let Images = document.querySelectorAll('.img-container') ;

    Images.forEach( function (element) {
        element.addEventListener('mouseover', function () {
            element.style.borderWidth = element.clientWidth * 0.02 + 'px' ;
        })

        element.addEventListener('mouseout', function () {
            element.style.borderWidth = '0px' ;
        })
        
        element.addEventListener('click', function() {
            console.log('clicked');

            let computedStyle = window.getComputedStyle(element);
            let parentDiv = element.parentNode;
            let backdrop = document.createElement('div');

            if (computedStyle.position == 'relative') {
                
                backdrop.style.position = 'fixed';
                backdrop.style.top = '0';
                backdrop.style.left = '0';
                backdrop.style.width = '100%';
                backdrop.style.height = '100%';
                backdrop.style.backdropFilter = "blur(0px)";
                backdrop.style.transition = '0.7s';
                

                // backdrop.appendChild(element);
                document.body.appendChild(backdrop);

                document.body.appendChild(backdrop);
                let img_rect = element.getBoundingClientRect();
            

                // Change the position to fixed
                element.style.transition = '0s';
                element.style.position = 'absolute';

                backdrop.style.backdropFilter = "blur(10px)";

                // Apply the stored position
                backdrop.appendChild(element);
                element.style.top = img_rect.top + 'px';
                element.style.left = img_rect.left + 'px';
                element.style.height = (img_rect.bottom - img_rect.top) + 'px';
               
                setTimeout(function () {
                    element.style.transition = 'all 1s';
                    element.style.left = window.innerWidth * 0.5 + 'px';
                    element.style.top = window.innerHeight * 0.4 + 'px';
                    element.style.height = window.innerHeight * 0.7 + 'px'; // Adjust the desired width
                    element.style.width= 'auto';
                    element.style.transform = 'translate(-50%, -50%)';
                    
                }, 10);
                setTimeout( function() {
                    element.style.transition = 'all 0.2s';
                }, 1000);
            }
            else{
                console.log('not in relative position')
            }


            backdrop.onclick = function() {     // transforming image to align with the original position 

                backdrop.style.backdropFilter = "blur(0px)";    // slowly untransitioning
                
                element.style.transition = '0.7s';              // slowing down transitioning for going back

               let rect_2 = parentDiv.getBoundingClientRect(); // getting coordinates for the image to align

                let parent_div_width = (rect_2.right - rect_2.left);    // setting params
                let image_height_space = ( parent_div_width / element.width ) * element.height ;
                parentDiv.style.paddingTop = image_height_space * 0.94 + 'px'; // to make the text under the image go down 
                                                                        // for smooth transitioning
                element.style.transform = 'translate(0%, 0%)';          // the actual transformation
                element.style.top = rect_2.top + parent_div_width * 0.03 + 'px';
                element.style.left = rect_2.left + parent_div_width * 0.03 + 'px';
                element.style.height = image_height_space * 0.94 + 'px';
            
                   

                setTimeout ( function(){        //making the switch to the img-container

                    element.style.transition = '0s';

                    parentDiv.insertBefore(element, parentDiv.firstChild);          //reattaching img to the img-container div

                    element.style.position = 'relative';    // reverting back to the values for inside the img-container
                    parentDiv.style.paddingTop = '0px';
                    element.style.left = '3%';
                    element.style.top = '3%';

                    setTimeout (function() { element.style.transition = '0.2s';
                    document.body.removeChild(backdrop); console.log('removed the bacdrop');} ,100)//reverting back the speed after all the actions are done

                }, 700) 
            };
        } )
        
    } )
})

