let gamePattern = [];
    // array which magazines all clicked buttons in a chronological order
let userClickedPattern = [];



let started = false;
    // current level stage shown on the screen
let level = 0;



    // starts the whole game via any keyboard button click
$(document).keydown(function() {

    if (!started) {
            // shows current stage of the game
        $("#level-title").text("Level " + level);

            // calls a function that plays the proper sound when the button is clicked*/
        nextSequence();

            // blocks EVERY next executing of this handler
        started = true;
  }

});



    // starts the whole game via clicking/touching a colored button
$(".btn").click(function() {

        // what will happen when the button got clicked/touched before game start
    if(!started) {
        
        // shows current stage of the game
        $("#level-title").text("Level " + level);
    
            // calls a function that plays the proper sound when the button is clicked */
        nextSequence();
    
            // blocks EVERY next executing of this handler
        started = true;
        
    }else{
            // stores the 'id' of clicked button
        let userChosenColor = $(this).attr("id");

            // putting into every array's magazine all clicked buttons
        userClickedPattern.push(userChosenColor);


            // playing the proper sound when the button is clicked
        playSound(userChosenColor);

            // making the button's border animation when button is clicked
        animatePress(userChosenColor);

        checkAnswer(userClickedPattern.length-1);

    }

});



function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);

      }
    
    }else {

        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    
    }

}



    /* playing the proper sound when clicking on a button */
function nextSequence() {

    userClickedPattern = [];
        
        // increasing the current Level Stage each time when the user click next correct button
    level++;

        // when the clicked button is correct - then Level is going to be next (1, 2, 3 etc.)
    $("#level-title").text("Level " + level);

        // array containing the buttons' colors
    let buttonColors = ["rosy", "blueberry", "green", "yellow"];

        // creating a random number between 0 and 3
    let randomNumber = Math.floor(Math.random() * 4);

        // randomizizng all 4 buttons' colors instead of just numbers
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

        // making random button flash animation when the page is newly opened
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        // playing random sound equal to the randomized button
    playSound(randomChosenColor);

}



    // animation played when the button got clicked
function animatePress(currentColor) {

        // small border animation
    $("#" + currentColor).addClass("pressed");
    
        // setting the period of the animation to 0.1s
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}



    // playing the sound when ANY button got pressed (button's color = sound's color)
function playSound(name) {

    let audio = new Audio("sounds/" + name + ".mp3");

    audio.play();

}



function startOver() {

    level = 0;
    gamePattern = [];
    started = false;

}
