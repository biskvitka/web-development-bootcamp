


var randomNumber1 = Math.ceil( Math.random() * 6 );
var randomNumber2 = Math.ceil( Math.random() * 6 );

console.log(randomNumber1 + " and " + randomNumber2);

function selectApropriatePicture( number ) {
    return "./images/dice" + number + ".png";
}

function getTextForResult( number1, number2) {
    
    if(number1 > number2) {
        return "🚩 Player 1 Wins!";
    } else if (number1 < number2 ) {
        return "Player 2 Wins! 🚩";
    }

    return "Draw!"
}

document.querySelector("h1").innerHTML = getTextForResult(randomNumber1, randomNumber2);
document.querySelectorAll("img")[0].setAttribute("src", selectApropriatePicture( randomNumber1 ));
document.querySelectorAll("img")[1].setAttribute("src", selectApropriatePicture( randomNumber2 ));