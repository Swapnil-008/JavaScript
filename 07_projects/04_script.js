let randomNumber = Math.round(Math.random() * 100 + 1);
console.log(randomNumber);

let previousGuesses = [];
let remainingGuesses = 10;

const remainGuesses = document.querySelector(".remainingGuesses");
const submitButton = document.querySelector(".btn-warning");
const restart = document.querySelector("#restart");
const guesses = document.querySelector(".wrongGuesses");
const message = document.querySelector("#message");
const text = document.getElementById("number");

remainGuesses.innerHTML = `Remaining Guesses: ${remainingGuesses}`;
guesses.innerHTML = "Previous Guesses: ";

restart.addEventListener("click", reset);

submitButton.addEventListener("click", () => {
    const guessedNumber = parseInt(text.value);
    text.value = "";
    if (guessedNumber < 1 || guessedNumber > 100 || isNaN(guessedNumber)) {
        message.innerHTML = "Invalid number, Enter a valid number between 1 and 100!";
        return;
    }

    let isPresent = false;
    previousGuesses.forEach((num) => {
        if (num === guessedNumber) {
            message.innerHTML = "Wrong guess, This number is already Guessed!";
            isPresent = true;
        }
    });

    if (isPresent)
    {
        return;
    }
    if (guessedNumber === randomNumber)
    {
        message.innerHTML = "🎊 Congratulations! Your guess is correct!";
        text.setAttribute("disabled", "true");
        return;
    }
    else if (guessedNumber > randomNumber)
    {
        message.innerHTML = "Correct number is Lesser than you guessed!";
    }
    else if (guessedNumber < randomNumber)
    {
        message.innerHTML = "Correct number is Greater than you guessed!";
    }

    previousGuesses.push(guessedNumber);
    guesses.innerHTML = `Previous Guesses: ${previousGuesses.join(", ")}`;
    remainGuesses.innerHTML = `Remaining Guesses: ${--remainingGuesses}`;

    if (remainingGuesses === 0)
    {
        message.innerHTML = `Game Over! The correct number was ${randomNumber}.`;
    }
});
function reset() {
    randomNumber = Math.round(Math.random() * 100 + 1);
    previousGuesses = [];
    remainingGuesses = 10;
    remainGuesses.innerHTML = `Remaining Guesses: ${remainingGuesses}`;
    guesses.innerHTML = "Previous Guesses: ";
    message.innerHTML = "";
    text.value = "";
    text.removeAttribute('disabled');
}
