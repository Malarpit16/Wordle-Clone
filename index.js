
var guesses = document.getElementsByClassName("letter");
var x = 0;

guesses[x].oninput = function nextLetter() {
    guesses[x+1].focus();
    x++;
}


