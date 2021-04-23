// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArr = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~",];
var input;

// generateBtn.addEventListener("click", function () {
//   pw = writePassword();
//   document.getElementById("password").placeholder = pw;
// })


// Write password to the #password input
// function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  //bring up prompts to gather user input
  input = parseInt(prompt("How long of a password would you like? Please enter a value between 8 and 128!"));

  var uppercaseCon = confirm("Would you like to use uppercase?");
  var lowercaseCon = confirm("Would you like to use lowercase?");
  var numbersCon = confirm("Would you like to use numbers?");
  var symbolsCon = confirm("Would you like to use symbols?");

  function writePassword() {
  //message if no input is selected
  // if (!uppercaseCon && !lowercaseCon && !numbersCon && !symbolsCon) {
  //   input = alert("One option must be selected! Please try again!");
  // }

  //3 choices selected
    if (numbersCon && symbolsCon && uppercaseCon) {
    choices = numberArr.concat(symbolArr, upperArr); //NUMBER - SYMBOL - UPPER
  } else if (numbersCon && symbolsCon && lowercaseCon) {
    choices = numberArr.concat(symbolArr, lowerArr); //NUMBER - SYMBOL - LOWER
  } else if (numbersCon && lowercaseCon && uppercaseCon) {
    choices = numberArr.concat(lowerArr, upperArr);  //NUMBER - LOWER - UPPER
  } else if (symbolsCon && lowercaseCon && uppercaseCon) {
    choices = symbolArr.concat(lowerArr, upperArr); //SYMBOL - LOWER - UPPER
  }

    //2 choices selected
   else if (lowercaseCon && symbolsCon) {
    choices = lowerArr.concat(symbolArr); //LOWER AND SYMBOL
  } else if (uppercaseCon && symbolsCon) {
    choices = upperArr.concat(symbolArr); //UPPER AND SYMBOL
  } else if (numbersCon && symbolsCon) {
    choices = numberArr.concat(symbolArr) //NUMBER AND SYMBOL
  } 
  
    else if (numbersCon && lowercaseCon) {
    choices = numberArr.concat(lowerArr); //NUMBER AND LOWER
  } else if (uppercaseCon && lowercaseCon) {
    choices = upperArr.concat(lowerArr);  //UPPER AND LOWER
  } else if (uppercaseCon&& numbersCon) {
    choices = upperArr.concat(numberArr); //UPPER AND NUMBER
  }
// 1 choice selected
    else if (uppercaseCon) {
    choices = upperArr;
  } else if (lowercaseCon) {
    choices = lowerArr;
  } else if (numbersCon) {
    choices = numberArr;
  } else if (symbolsCon) {
    choices = symbolArr;
  };

  // create array for choices
  var finalArr = [];

  for (var i = 0; i < input; i++) {
    var userChoices = choices[Math.floor(Math.random() * choices.length)];
    finalArr.push(userChoices);
  }

  // var finalInput =  finalArr.join("");
  // UserInput(password);
  // return finalInput;


}

writePassword();


function UserInput(password) {
  document.getElementById("#password").textContent = password;

}
//executing function writePassword


// Add event listener to generate button
// generateBtn.addEventListener("click", UserInput);
