// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var passwordLength = Number(prompt("Please enter a number between 8 and 128 for password length."));
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Must be greater than 8 and less than 128");
    { return }
  };

  var isLowerCases = confirm("Would you like to include lower case characters?");
  var isUpperCases = confirm("Would you like to include upper case characters?");
  var isNumbers = confirm("Would you like to include numbers?");
  var isSpecial = confirm("Would you like special characters?");

  // Place holder for end user choices and random password
  var charBank = "";
  var newPassword = "";

  // Defines variables to choices

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()";

  // Add if questions for results

  if (isLowerCases === true) {
    charBank = charBank.concat(lowerCase)
  }

  if (isUpperCases === true) {
    charBank = charBank.concat(upperCase)
  }

  if (isNumbers === true) {
    charBank = charBank.concat(numeric)
  }

  if (isSpecial === true) {
    charBank = charBank.concat(special)
  }

  // Creates randomize function for charBank

  function random(max) {
    return [Math.floor(Math.random() * max)]
  }

  // Adds new variable that replaces password to present to the user

  for (var i = 0; i < passwordLength; i++) {
    newPassword = newPassword.concat(charBank.charAt(random(charBank.length - 1)))

    //charSets.charAt(Math.floor(Math.random() * charSets.//length));
  }
  return newPassword
}