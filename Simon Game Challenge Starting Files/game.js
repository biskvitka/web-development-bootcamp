var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var firstKypress = true;
var idOfLastAnswer = 0;

function playSound( colour ) {
    var audio = new Audio("./sounds/" + colour + ".mp3");
    audio.play();
}

function animatePress( currentColour ) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function() {
        $(".pressed").removeClass("pressed");
    }, 100);
}

function nextSequence(){
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * buttonColours.length);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    level++;
    userClickedPattern = [];
    idOfLastAnswer = 0;
}

$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    if( !firstKypress ) {
        if ( !checkAnswer( idOfLastAnswer ) ) {
            console.log("wrong");
            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();
        } else {
            console.log("success");
            idOfLastAnswer++;
            if( idOfLastAnswer === gamePattern.length ) {
                setTimeout(function() {
                    nextSequence();
                }, 1000);
            }
        }
    }
});

$("html").keypress(function(){
    if(firstKypress) {
        nextSequence();
        firstKypress = false;
    }
    console.log("hi");
})

function checkAnswer( currentLevel ) {
    return userClickedPattern[currentLevel] === gamePattern[currentLevel];
}

function startOver() {
    level = 0;
    gamePattern = [];
    firstKypress = true;
}
