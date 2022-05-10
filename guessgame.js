const prompt = require('prompt-sync')({ sigint: true });

let name = "";

function intro() {
  console.log("")
  name = prompt("What is your name?: ");
  console.log("")
  return guessGame()
}

function guessGame() {  
  console.log(`Hey there ${name[0].toUpperCase() + name.slice(1)}. Let’s try to guess a number in my mind.`);
  console.log("")

  // Random number from 1 - 100
  let numberInMind = Math.floor(Math.random() * 100) + 1;
  
  // // This variable is used to determine if the app should continue prompting the user for input
  let foundCorrectNumber = false;

  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    const guessNumber = prompt("It is between 0-100, guess it: ")

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).

    if (Number(guessNumber) > numberInMind) {
      console.log("")
      console.log("It’s too large.")
      console.log("")
    } else if (Number(guessNumber) < numberInMind) {
      console.log("")
      console.log("It’s too small.")
      console.log("")
    } else if (Number(guessNumber) === numberInMind) {
      console.log("")
      console.log("Congratulation, You found the correct number!!")
      console.log("")      
      return playAgain()
    } else {
      console.log("")
      console.log("Please answer in Number only.")
      console.log("")
    }
  }
}

// Bonus Point: prompt user and provide option for user to start a new game after winning

function playAgain() {

  const replayGame = prompt("Do you want to play again? (Yes/No): ");
  console.log("")

  if (replayGame.toLowerCase() === "no") {
    console.log("")
    console.log("Maybe next time. Good Bye!")
    console.log("")
    console.log("")
  } else if (replayGame.toLowerCase() === "yes") {
    return changeName()
  } else {
    console.log("Please answer Yes or No only")
    console.log("")
    return playAgain()
  }
}

function changeName() {

  const newName = prompt("You can change your 'Name' if you want. (Yes/No): ");
  console.log("")

  if (newName.toLowerCase() === "no") {
    return guessGame()
  } else if (newName.toLowerCase() === "yes") {
    return intro()
  } else {
    console.log("Please answer Yes or No only")
    console.log("")
    return changeName()
  }
}

intro()