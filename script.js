// Assignment Code
let generateBtn = document.querySelector("#generate");  

// Write password to the #password input
function writePassword() {
  // let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  let passwordLength
  let useUppercase
  let useLowercase
  let useSpecial

  passwordText.value = password;

  passwordLength = prompt("Set number of characters for your password, 8 to 128.");

  useUppercase = confirm("Use uppercase letters?");

  useLowercase = confirm("Use lowercase letters?");

  useSpecial = confirm("Use special characters?");

console.log(passwordLength);
console.log(useUppercase);
console.log(useLowercase);
console.log(useSpecial);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomLowercase() {
  let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  console.log(randomLowercaseLetter);
  }

  function getRandomUppercase() {
    let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    console.log(randomUppercaseLetter);
    }

  function getRandomSpecial() {
    let specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    let randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    console.log(randomSpecialCharacter);
    }

generateBtn.addEventListener("click", getRandomLowercase);

generateBtn.addEventListener("click", getRandomUppercase);

generateBtn.addEventListener("click", getRandomSpecial);



// arraycombinations of a b c d
// abcd
// abc
// abd
// acd
// bcd
// ab
// ac
// ad
// bc
// bd
// cd 
// a 
// b
// c
// d



