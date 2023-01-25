// if we put script tag in head or in starting of body it shows error coz it executed first from all tags in body and can't find id class, etc..
// to stay away from this type of error we uses dom content loaded event which executes other codes first and then script tag

document.addEventListener("DOMContentLoaded", function() {
    // Put whole javascript code here, Now we don't have to worry about script tag in html document



    // function handleClick() {
    //     alert("You have clicked the button");
    // }
    
    // document.getElementById("clickme").onclick = handleClick;
    
    // Recommended way
    
    // document.getElementById("clickme").addEventListener("click", handleClick);
    // or you can direcly write function there
    
    // document.getElementById("clickme").addEventListener("click", function handleClick() {alert("you have clicked the button")});
    
    
    
    // tracking mouse over
    
    function handleMouseOver(event) {
        console.log(event);
    }
    
    document.getElementById("start").addEventListener("click", function handleClick() {
        document.addEventListener("mouseover", handleMouseOver);
    });
    
    document.getElementById("stop").addEventListener("click", function handleClick() {
        document.removeEventListener("mouseover", handleMouseOver);
    });
    
    document.addEventListener("keyup", function(e) {
        console.log(e.key);
        if(e.key == 2) {
            e.preventDefault();
        }
    });
    
    document.getElementById("username").addEventListener("focus", function(event) {
        console.log("Focus Event happend")
    });
    
    document.getElementById("username").addEventListener("blur", function(event) {
        console.log("Blur Event happend")
    });
    




});


