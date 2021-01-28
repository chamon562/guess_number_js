// need to make a Play Game function
// show how the guess is too high or too low when the user hits check me
// show the guess is correct 
// show history and its stored 
// javascript will create a random number between 1 and 100 and saves it in its memory
// add random picture fast pace rotating through and have the winner be able to press it and it stops to say something about them. ex you got gandolf! you are a natural wizard! 

/**
 * Guess The Number Game
 * TODO to Done: Get user value from input and save it to variable numberGuess
 * TODO to Done: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO to Done: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO to Done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
/* Create a global variable for correctNumber
and use the function getRandomNumber */
let correctNumber = getRandomNumber();
console.log(correctNumber, "🦧");
// this function waits for the html file to load and allows to execute any funciton that we want
window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

/**
 * Functionality for playing the whole game
 */
function playGame() {
    // *CODE GOES BELOW HERE *
    // * #1 TODO: Get user value from input and save it to variable numberGuess
    /* I knew I had to target the input so grabbed its id="number-guess" then stored
    it in a variable called numberGuess and used the property .value to get the 
    value number the user typed in the input field. I console log to show if what 
    the user typed registers and shows when the EventHandler click "checkMe" created
    by the window.onload = function(){...} is clicked. 
    */
    let numberGuess = document.getElementById("number-guess").value;
    console.log(numberGuess);
    // pass in numberGuess and accept numberGuess as a parameter in displayResult function
    displayResult(numberGuess);
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess) {
    if (numberGuess >= correctNumber + 20) {
        console.log("Guess is way too high!");
        document.getElementById("history").innerHTML = "<p>Guess is way too high!</p>"
    } else if (numberGuess >= correctNumber + 10) {
        console.log("Close! But still a little too high.")
        document.getElementById("history").innerHTML = "<p>Close! But still a little too high.</p>"
    } else if (numberGuess >= correctNumber + 5) {
        console.log("Very close! But still a little bit high.")
    } else if (numberGuess > correctNumber) {
        console.log("Extremely very close! But still high.")
    }
    else if (numberGuess <= correctNumber - 20) {
        console.log("Guess is way too low!")
    } else if (numberGuess <= correctNumber - 10) {
        console.log("Close! But still alitle too low.")
    } else if (numberGuess <= correctNumber - 5) {
        console.log("Very close! But still a little bit low.")
    } else if (numberGuess < correctNumber) {
        console.log("Extremely Very close! But still low. ")
    } else {
        console.log("Bing! You Got the right numbe! You are a Psychic!")
    }
    return
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
    // *CODE GOES BELOW HERE *
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber() {
    // *CODE GOES BELOW HERE *
    // Using Math.floor to get a whole number of a Random number from 1 to 100
    let wholeNumber = Math.floor(Math.random() * 100);
    // console.log(correctNumber);
    return wholeNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
    // *CODE GOES BELOW HERE *
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
    let index; // TODO
    let list = "<ul class='list-group'>";
    // *CODE GOES BELOW HERE *
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showYouWon() {
    const text = "Awesome job, you got it!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'won' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    // created a variable dialog and made it equal to getDialog function and pass it "won" , text
    let dialog = getDialog("won", text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
}
