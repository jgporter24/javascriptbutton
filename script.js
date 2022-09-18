// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var length = Number(prompt("Please enter a number between 8 and 128."));
  if (length < 8 || length > 128) {
    window.alert("Must be greater than 8 and less than 128");
    {return};
  };

  var lowerCase = confirm("Would you like to include lower case characters?");

  var upperCase = confirm("Would you like to include upper case characters?");
  var numeric = confirm("Would you like to include numbers?");
  var specialChar = confirm("Would you like special characters?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}

