//function to let me know things are functional, suggested by Ryan 6/20/23
// These are really ideas to put into real time coding getting it started, not so much for specific boilerplate code.

window.addEventListener("load", function(){
    console.log("Page has loaded and onload is working.");
    const myButton = document.getElementById("myButton");
    console.log(myButton);
    myButton.addEventListener("click", function() {
        const h1 = document.querySelector("h1");
        console.log(h1);
        h1.setAttribute("class", "redText");
        console.log(h1Elements);

        const h1Array = Array.from(h1Elements);

        h1Array.forEach(function(h1Element){
            h1Element.setAttribute("class", "redText");

        })
    }
});



// Business Logic

// User Interface Logic

