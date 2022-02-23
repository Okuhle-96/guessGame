var guess = document.querySelector(".guess");
var guessBtn = document.querySelector(".guessBtn");
var message = document.querySelector(".message");

var number = Math.ceil((Math.random() * 100));

function guessRandomNumber(){
    if(guess.value < number) {
        message.innerHTML = "Your guess is too low.";
        setTimeout(function(){
            message.innerHTML = "";
         }, 2000);
    }else if(guess.value > number) {
        message.innerHTML = "Your guess is too high.";
        setTimeout(function(){
            message.innerHTML = "";
         }, 2000);
    }else {
        message.innerHTML = `Correct, the secret number is ${number} ! ! !`;
        number = Math.ceil((Math.random() * 100));
        setTimeout(function(){
            message.innerHTML = "";
         }, 8000);

         setTimeout(function(){
            message.innerHTML = "New Game Started";
         }, 3000);
    }
}
guessBtn.addEventListener("click", guessRandomNumber)
