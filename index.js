
var guesses = document.getElementsByClassName("letter");
var x = 0;

function nextLetter() {
    x++;
    guesses[x].focus();
}


