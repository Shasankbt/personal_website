let password = 'hibro123';

window.onload = function () {
    let div = document.getElementById('locker_div');

    if(div.getAttribute('data-locked') == "true"){
    let blur = document.createElement('div');
        blur.id = 'background_blur';
        blur.style.backdropFilter = "blur(3px)";
        blur.style.position = 'absolute';
        blur.style.top = '0';
        blur.style.left = '0';
        blur.style.width = '100%';
        blur.style.height = '100%';
        blur.style.transition = '0.5s';
        div.appendChild(blur);

        const lockDiv = document.createElement('div');
        lockDiv.id = 'lock_page'; // Set the ID attribute
        lockDiv.style.display = 'flex';
        lockDiv.style.flexDirection = 'column';
        lockDiv.style.alignItems = 'center';
        lockDiv.style.opacity = '0';
        lockDiv.style.transition = '0.5s'; // Match the transition duration

        // Create a <label> element
        const label = document.createElement('label');
        label.htmlFor = "code_input";
        label.innerHTML = 'Enter the code'; // Set the label text
        label.classList.add('template-text-1');
        label.style.position = 'fixed';
        label.style.top = "26%";
        label.style.fontSize = "15px";
        label.style.fontWeight = "400";
        label.style.verticalAlign = 'bottom';

        // Create an <input> element
        const input = document.createElement('input');
        input.id = 'code_input'; // Set the ID attribute
        input.type = 'text'; // Set the input type
        input.style.position = 'fixed';
        input.style.top = "30%";
        input.style.width= "200px";
        input.style.fontSize = "20px"
        input.classList.add('template-text-1')
        input.style.height = "25px";
        input.style.borderRadius = "15px"
        input.style.border = "none"; 
        input.style.backgroundColor = "rgb(5, 1, 20)";
        input.style.textAlign = "center";

        let submit_button = document.createElement('button');
        submit_button.id = "submit_button_id"
        //submit_button.type = 'submit';
        submit_button.classList.add('submit-button');
        submit_button.onclick = verifyCode;
        submit_button.style.position = 'fixed';
        submit_button.style.top = '35%';
        submit_button.innerHTML = "go";

        let contact = document.createElement('p');
        contact.classList.add('template-text-1');
        contact.innerHTML =
             `ⓘ this passcode is implemented in the concern
              of privacy <br> if you want to access the website, message me via my `;
        contact.style.position = 'fixed';
        contact.style.top = '45%';
        contact.style.fontSize = '13px'
        contact.style.opacity = '0.4';
        contact.style.textAlign = 'center';

        let email = document.createElement('a');
        email.href = "mailto:docstefenstrange@gmail.com"
        email.innerHTML = "email"
        email.classList.add('template-text-1');

        contact.appendChild(email);



        // Append the label and input to the lockDiv
        lockDiv.appendChild(label);
        lockDiv.appendChild(input);
        lockDiv.appendChild(submit_button);
        lockDiv.appendChild(contact);

        div.appendChild(lockDiv);

        setTimeout(function () {
            blur.style.backdropFilter = "blur(10px)";
            lockDiv.style.opacity = '1';
        }, 100); 

        document.addEventListener('keydown', function(event){
            if(event.key == 'Enter'){
                verifyCode();
            }
        })
    }
}

function verifyCode(){
    
    let input = document.getElementById('code_input');
    let button = document.getElementById('submit_button_id');

    if ( input.value.trim() == password ){
        unlock(button);
    } 
    else {
        input.value = "";
        button.classList.add('incorrect');
        button.style.color = 'rgba(255, 255, 255, 0)';
        setTimeout( function() {
            button.style.color = 'rgb(218, 215, 240)';
            button.innerHTML = "wrong"; 
            
        }, 200)
        setTimeout( function() {
            button.style.color = 'rgba(255, 255, 255, 0)';
            button.classList.remove('incorrect');
        }, 400)
        setTimeout(function(){
            button.style.color = 'rgb(218, 215, 240)';
            button.innerHTML = "go";
        }, 600)
    }
}

function unlock(button){
    let backdrop = document.getElementById('background_blur');
    let lockDiv = document.getElementById('lock_page');
    let div = document.getElementById('locker_div');

    //document.querySelector('label[for="code_input"]').innerHTML = "welcome to my Website !"

    let label = document.querySelector('label[for="code_input"]');
    label.innerHTML = "Welcome to my Website!";
    label.style.fontSize = "18px";
    

    button.classList.add('correct');
    button.style.color = 'rgba(255, 255, 255, 0)';
    setTimeout( function() {
        button.style.color = 'rgb(218, 215, 240)';
        button.innerHTML = "correct"; 
        
    }, 200)

    setTimeout(function(){
        backdrop.style.backdropFilter = "blur(0px)";
    lockDiv.style.opacity = "0";
    }, 1000)
    

    setTimeout(function(){
        div.removeChild(backdrop);
        div.removeChild(lockDiv);
    }, 1500)

}