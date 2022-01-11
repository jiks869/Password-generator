
console.log("This is script.js");

//Assignment Code
var generateBtn = document.querySelector("#generate");

//Function for generatePassword to be used in writePassword function
function generatePassword() {
  console.log("generatePassword initiated");

  //Prompt to choose password length
  var passwordLength = prompt(
    "Choose your password length by entering a number between 8 and 128."
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must select a number between 8 and 128. Try again.");
    console.log("Number does not meet criteria");
    return "Try again.";
  } else {
    console.log(passwordLength);
  }

 
  var characterTypes = [];

  //Confirmation for various character types, pushed into array, logged
  var lowerCase = confirm("Would you like to include lowercase characters?");
  if (lowerCase === true) {
    characterTypes.push(0);
  }
  console.log(lowerCase);

  var upperCase = confirm("Would you like to include uppercase characters?");
  if (upperCase === true) {
    characterTypes.push(1);
  }
  console.log(upperCase);

  var numbers = confirm("Would you like to include numbers?");
  if (numbers === true) {
    characterTypes.push(2);
  }
  console.log(numbers);

  var special = confirm("Would you like to include special characters?");
  if (special === true) {
    characterTypes.push(3);
  }
  console.log(special);

  console.log(characterTypes);

  var yourPassword = "";

  // //Randomizer what character type to pick.
  for (var i = 0; i < passwordLength; ++i) {
    var randomCharacterType =
      characterTypes[Math.floor(Math.random() * characterTypes.length)];
    console.log(randomCharacterType);
    }
    console.log("Your password is " + yourPassword);
    return yourPassword;
  }

// Write password to the #password input
function writePassword() {
  console.log("Button clicked");
  var password = generatePassword();
  console.log("PRESENT PASSWORD " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword)

