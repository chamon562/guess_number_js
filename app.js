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
 * TODO to Done: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO to Done: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO to Done: Save the guess history in a variable called guess
 * TODO to Done:: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */
// Stretch Goal add limited number of tries and points for winning with lease amount of guesses. first try is 100 points. give 5 tries. decrease by 20% 80, 60, 40, 20
// create a back end for score board to store leader board and give a three letter entry. 
// winner gets random cut cat picture. the greater the win the cooler the picture with gifs or regular stand kitty.

// Variable to store the list of guesses 
// set variable guesses to empty array to later be populated by using .push() method
let guesses = [];
// Variable for store the correct random number 
/* Create a global variable for correctNumber
and use the function getRandomNumber */
let correctNumber = getRandomNumber();
console.log(correctNumber, "🦧");
// this function waits for the html file to load and allows to execute any funciton that we want
window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
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
    // call saveGuessHistory and pass in the numberGuess of what the user typed in and
    // when user types in a number click check me and the playgame() function will get called and 
    // inside that displayResult and saveGuessHisotry will get called and guesses.push(guess) value to the top of the array
    saveGuessHistory(numberGuess);
    // makes sense after savingGuessHistory and then follow with displayHistory ()
    displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {
        showNumberAbove();
    } else if (numberGuess < correctNumber) {
        showNumberBelow();
    } else {
        showYouWon();
    }
    // if (numberGuess >= correctNumber + 20) {
    //     console.log("Guess is way too high!");
    //     showNumberAbove();
    // } else if (numberGuess >= correctNumber + 10) {
    //     console.log("Close! But still a little too high.")
    //     showNumberAbove();
    // } else if (numberGuess >= correctNumber + 5) {
    //     console.log("Very close! But still a little bit high.")
    //     showNumberAbove();
    // } else if (numberGuess > correctNumber) {
    //     console.log("Extremely very close! But still high.")
    //     showNumberAbove();
    // }
    // else if (numberGuess <= correctNumber - 20) {
    //     console.log("Guess is way too low!")
    //     showNumberBelow();
    // } else if (numberGuess <= correctNumber - 10) {
    //     console.log("Close! But still alitle too low.")
    //     showNumberBelow();

    // } else if (numberGuess <= correctNumber - 5) {
    //     console.log("Very close! But still a little bit low.")
    //     showNumberBelow();

    // } else if (numberGuess < correctNumber) {
    //     console.log("Extremely Very close! But still low.")
    //     showNumberBelow();

    // } else {
    //     console.log("Bingo! You Got the right number! You are a Psychic!")
    //     showYouWon();

    // }
    // return
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
    // *CODE GOES BELOW HERE *
    // Reset correctNumber
    correctNumber = getRandomNumber();
    // reset the result display
    document.getElementById("result").innerHTML = "";
    document.getElementById("number-guess").value = "";
    // reset he guesses array to guesses = [];
    guesses = [];
    // reset the guess history display
    displayHistory();

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
    // this function needs to be called and save in main game logic
    guesses.push(guess);
    console.log(guesses);
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
    // recent result from top to bottom
    // let index = 0;
    // to go backwards from bottom to top
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>";
    // *CODE GOES BELOW HERE *
    // iterate through the guesses using a while loop
    // console.log(`${guesses} is the users guess.`);
    // while is continous loop while something is true want to do something create list item
    // append to list variable
    // in whileloop in order to loop through all items use index to go through 
    // while (index is less than guesses.length) continue to loop through it.
    // while(index < guesses.length){
    // traverse the array
    while (index >= 0) {
        list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>"
        // increment index to go to the next address 
        // index += 1
        index -= 1
        // break;
        // went through all arrays, created all list items and appended to list variable
        // can be seen on screen because of the dom grabbing history and using .innerHTML equal to the list created
    }
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
    // appending text to dialog
    dialog += text;
    // closing div tag for dialog
    dialog += "</div>"
    return dialog;
}

function showYouWon() {
    const text = "Bingo! You Got the right number! You are a Psychic!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'won' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    // created a variable dialog and made it equal to getDialog function and pass it "won" , text
    let dialog = getDialog("won", text);
    console.log(dialog)
    document.getElementById("result").innerHTML = dialog;
}
function showNumberAbove() {
    const text1 = "Guess is way too high!"
    // const text2 = "Close! But still a little too high."
    // const text3 = "Very close! But still a little bit high."
    // const text4 = "Extremely very close! But still high."
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    let dialog = getDialog("warning", text1);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text1 = "Guess is way too low!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    let dialog = getDialog("warning", text1);
    document.getElementById("result").innerHTML = dialog;
}
