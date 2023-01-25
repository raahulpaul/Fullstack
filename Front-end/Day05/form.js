document.addEventListener("DOMContentLoaded", function(){

    // inside form
    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();
        const form = event.target;
        console.log(form.username.value);
        console.log(form.email.value);

        // const mobileNumber = parseInt(form.mobile.value);
        // if(mobileNumber.toString() == NaN.toString()) {
        //     alert("you have entered invalid number");
        // }
        // console.log("The mobile number is " + mobileNumber);
    });

    document.getElementById("email").addEventListener("input", function(event) {
        const emailElement = event.target;
        console.log(emailElement.value);

        if(emailElement.validity.typeMismatch) {
            emailElement.setCustomValidity("Please enter a valid email address");
            emailElement.reportValidity();
        }

        else {
            emailElement.setCustomValidity("");
        }
    });

    
    // Outside form 
    document.addEventListener("click", function() {
        console.log(document.getElementById("outside").value);
    });

});