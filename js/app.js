let gamePattern = [];

    // array which magazines all clicked btns in a chronological order
let userClickedPattern = [];

let started = false;
    
    // current level stage shown on the screen
let level = 0;

    // plays the proper sound when any btn got pressed (btns' color = sound's color)
let playSound = (name) => {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

    // playing the proper sound when clicking on a btn
let nextSequence = () => {
    userClickedPattern = [];
        
        // increasing the current Level Stage each time when the user click next correct btn
    level++;

        // when the clicked btn is correct, then Level is increasing (1, 2, 3 etc.)
    $('#level-title').text(`Level ${level}`);

        // array containing btns names
    let btnsColors = ['brownish', 'peachy', 'turquoise', 'yellowish'];

        // creating a random number between 0 and 3
    let randomNumber = Math.floor(Math.random() * 4);

        // randomizes all 4 btns instead of just numbers
    let randomChosenColor = btnsColors[randomNumber];

    gamePattern.push(randomChosenColor);

        // makes random btn flash animation during f5-ing or opening the page
    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        // plays random sound equal which's name's equal to the btn's color
    playSound(randomChosenColor);
}

    // starts the whole game via any keyboard btn click
$(document).keydown(function() {
    if (!started) {
            // shows current level of the game
        $('#level-title').text(`Level ${level}`);

            // calls a function that plays the proper sound when the btn's clicked
        nextSequence();

            // blocks every next executing of this handler
        started = true;
    }
});

    // checks if the clicked btn was the good one or not
let checkAnswer = (currentLevel) => {
        // if clicked btn was correct
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
      }
        // if clicked btn was incorrect
    } else {
        playSound('wrong');
        $('body').addClass('game-over');
        $('#level-title').text('Game over, press any key to restart');

        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);

        startOver();
    }
}

    // animation played when a btn got clicked
let animatePress = (currentColor) => {
        // small border animation
    $('#' + currentColor).addClass('pressed');
    
        // setting the period of the animation to 0.1s
    setTimeout(function () {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
}

    // starts the whole game via clicking/touching a btn
$('.btn').click(function() {
        // what'll happen when the btn got clicked/touched before game start
    if (!started) {
        
            // shows current stage of the game
        $('#level-title').text(`Level ${level}`);
    
            // calls a function that plays the proper sound when the btn is clicked */
        nextSequence();
    
            // blocks EVERY next executing of this handler
        started = true;
    } else {
            // stores the 'id' of a clicked btn
        let userChosenColor = $(this).attr('id');

            // puts all clicked btns into every array's magazine
        userClickedPattern.push(userChosenColor);

            // plays the proper sound when the btn's clicked
        playSound(userChosenColor);

            // making the btn's border animation when btn's clicked
        animatePress(userChosenColor);

        checkAnswer(userClickedPattern.length-1);
    }
});

let startOver = () => {
    level = 0;
    gamePattern = [];
    started = false;
}



    // creates the new Date object
let currentDate = new Date();                       

    // gets access to the current year
let currentYear = currentDate.getFullYear();    

    // outputs the current year in the footer flex container
document.querySelector('.curr-year').textContent = currentYear;   
