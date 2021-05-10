
//     // an array that holds all 4 buttons
// var buttonColors = ["red", "blue", "green", "yellow"];




//     // click event interactions with buttons
// $(".btn").click(function() {
//     var userChosenColor = $(this).attr("id");
//     console.log(userChosenColor);
// })

//     // nie wiem raczej >,<
//     var userClickedPattrn = [];
//     userClickedPattern.push(userChosenColor);


// function nextSequence() {
    
//         // generating a random number between 0 and 3
//     var randomNumber = Math.floor(Math.random()) * 4;

//         // making a random button flash animation when the page is newly opened
//     $("#" + randomChosenColor).fadeTo(100, 0.3), function() {
//         $(this).faedTo(500, 1.0);
//     }

//         // selects a random sound (which is the same as button)
//     var randomSound = new Audio("sounds/" + randomChosenColor + ".mp3");

// }

//     // selecting random button
// randomChosenColor = buttonColors[randomNumber];

//     // nie wiem >,<
// var gamePattern = [];
// gamePattern.push(randomChosenColor);





















    // array containing the buttons' colors
var buttonColours = ["red", "blue", "green", "yellow"];

    // I don't know what is this >.<
var gamePattern = [];

    // creating an array which magazines all clicked buttons in a chronological order
var userClickedPattern = [];

    //etap gry, na jakim jest gracz
var gameLevel = 0;


var started = false;


    /* what will happen when the button is clicked (using the array which magazines all clicked buttons in a chronological order) */
$(".btn").click(function() {

        // selecting actually pressed button (color name)
    var userChosenColour = $(this).attr("id");

        // putting into every array's magazine all clicked buttons
    userClickedPattern.push(userChosenColour);

        // playing the proper sound when the button is clicked
    playSound(userChosenColour);

        // making the button's border animation when button is clicked
    animatePress(userChosenColour);

});


$(document).keypress(function() {
    if (!started) { // chuj wie, co to oznacza
            
            // starting the whole game - h1 now doesn't show: "Press A to start", but shows; "Level 1" - w sumie, to usunac to, bo wszystko sie i tak wykokonuje, co potrezbne, w funkcji nextSequence
        $("#level-title").text("Level " + gameLevel);
            
            // calluje całą zawartość tej funkcji
        nextSequence();
           
            // blocks EVERY next executing of this handler
        started = true;

    }
})


    // edycja - 08.05.2021
$(".btn").click(function() {
    if (!started) { // chuj wie, co to oznacza
            
            // starting the whole game - h1 now doesn't show: "Press A to start", but shows; "Level 1" - w sumie, to usunac to, bo wszystko sie i tak wykokonuje, co potrezbne, w funkcji nextSequence
        $("#level-title").text("Level " + gameLevel);
            
            // calluje całą zawartość tej funkcji
        nextSequence();
           
            // blocks EVERY next executing of this handler
        started = true;

    }
})
    /* koniec tej edycji~~ */


    /* playing proper sound when clicking on a button */
function nextSequence() {

        // creating a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    
        // randomizizng all 4 buttons' colors instead of just numbers
    var randomChosenColour = buttonColours[randomNumber];

        // I don't know what is this again >.<
    gamePattern.push(randomChosenColour);

        // increasing the current Level Stage each time when the user click next correct button
    gameLevel++;

        // when the clicked button is correct - then Level is going to be next (1, 2, 3 etc.)
    $("#level-title").text("Level " + gameLevel);

    // making random button flash animation when the page is newly opened
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

        // playing random sound equal to the randomized button
    playSound(randomChosenColour);

}



    /* playing the sound when ANY button got pressed (color of button = 'color' of sound) */
function playSound(name) {

        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    
}



    /* animation played when the button got clicked */
function animatePress(currentColour) {

        // small border animation
    $("#" + currentColour).addClass("pressed");
  
        // setting the period of that animation to 0.1s
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
  
}



    //
function checkAnswer(currentLevel) {

    userClickedPattern.push()

}





//     // when "a" keyboard key got clicked, the 'nextSequence' function  got executed
// $(document).keydown(function(event) {


//     if(event.key == "a") {
//         nextSequence();
//     } 

//     if(event.key == "a" && started === true) {
//         $("#level-title").text("Level 0 ");
//     }
    

// })












//         // array containing the buttons' colors
// const buttonColors = ["red", "blue", "green", "yellow"];

//     // randomizing a number between 0 and 3
// let randomNumber = Math.floor(Math.random() * 4);
    
//     // randomizizng all 4 buttons' colors instead of numbers
// let randomChosenColor = buttonColors[randomNumber];

//     // I don't know what is this >.<
// let gamePattern = [].push(randomChosenColor);

//     // array which magazines all of the clicked buttons in a chronological kolejność TODO: zmienić potem na let
// var userClickedPattern = [];


//     /* making random flash animation when the page is newly opened/refreshed */
// $("#" + randomChosenColor).fadeTo(100, 0.3), function() {
//     $(this).fadeTo(500, 1.0);
//         // making the proper sound
//     let randomSound = new Audio("sounds/" + randomChosenColor + ".mp3");
//     randomSound.play();
// }


//     /* buttons' click event */
// $(".btn").click(function() {
//         // stores the 'id' of clicked button
//     let userChosenColor = $(this).attr("id");
        
//         // adding next clicked button to the clicked buttons' magazine
//     userClickedPattern.push(userChosenColor);

//         // showing the array of clicked buttons
//     console.log(userClickedPattern);
// })

//     /* playing proper sound when clicking on a button */
// function playSound(name) {
    
//     randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);
  
//     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
//     var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//     audio.play();

// }
