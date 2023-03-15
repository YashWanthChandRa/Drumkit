var no_ofbuttons =document.querySelectorAll(".drum").length
for(var i=  0; i< no_ofbuttons; i++){

    //click detection
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
      
        var buttoninnerHTML = this.innerHTML ;

        makesound(buttoninnerHTML);

        buttonanimation(buttoninnerHTML);


        switch (buttoninnerHTML) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                 tom1.play(); 
                 break;

            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            
            case "s":
               var tom3 = new Audio('sounds/tom-3.mp3');
                 tom3.play();
                 break;

            case "d":
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;

            case "j":
                    var snare1 = new Audio('sounds/snare.mp3');
                    snare1.play();
                    break;

            case "k":
                    var craash = new Audio('sounds/crash.mp3');
                    craash.play();
                    break;

            case "l":
                    var kich = new Audio('sounds/kick-bass.mp3');
                    kich.play();
                    break;
        
            default: console.log(buttoninnerHTML);
               
        }
      
    } );
}
// key press detect
document.addEventListener("keypress",function(event){
     
    makesound(event.key);
    
    buttonanimation(event.key);
   
});

function makesound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play(); 
             break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
           var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
             break;

        case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

        case "j":
                var snare1 = new Audio('sounds/snare.mp3');
                snare1.play();
                break;

        case "k":
                var craash = new Audio('sounds/crash.mp3');
                craash.play();
                break;

        case "l":
                var kich = new Audio('sounds/kick-bass.mp3');
                kich.play();
                break;
    
        default: console.log(buttoninnerHTML);
           
}
}

function buttonanimation(curentkey){
    //shadow animation  
 var activebutton = document.querySelector("." + curentkey);

 activebutton.classList.add("pressed");
 setTimeout(function() {
    activebutton.classList.remove("pressed"); } , 400);
 }




