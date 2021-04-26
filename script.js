// Assignment Code
let generateBtn = document.querySelector("#generate");  
let generateBtn2 = document.querySelector("#generate2");  

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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn2.addEventListener("click", randomS);

// function getRandomLowercase() {
//   let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   let randomLowercaseLetter = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
//   console.log(randomLowercaseLetter);
//   }

//   function getRandomUppercase() {
//     let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     let randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
//     console.log(randomUppercaseLetter);
//     }

//   function getRandomSpecial() {
//     let specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
//     let randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
//     console.log(randomSpecialCharacter);
//     }

// generateBtn.addEventListener("click", getRandomLowercase);

// generateBtn.addEventListener("click", getRandomUppercase);

// generateBtn.addEventListener("click", getRandomSpecial);


//___________________________________________
// Create arrays of all possible non-order-specific combinations of lower, upper, number, and special so in the end random characters will be selected from the appropriate array.
// combinations of luns
// luns
// lun
// lus
// lns
// uns
// lu
// ln
// ls
// un
// us
// ns
// l
// u
// n 
// s

// lower upper number special 
let luns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// lower upper number
let lun = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// lower upper 
let lu = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// lower 
let l = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// lower upper special 
let lus = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// lower number special 
let lns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// upper number special 
let uns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// lower number
let ln = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// lower special 
let ls = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// upper number 
let un = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// upper special 
let us = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// number special 
let ns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// upper
let u = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// number 
let n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// special 
let s = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
//___________________________________________


// TODO replace i<10 in all functions with i<length specified by user.
function randomLuns() {
  for (let i = 0; i < 10; i++) {
    lunsCharacter = luns[Math.floor(Math.random() * luns.length)];
    console.log(lunsCharacter);   
  }
}

function randomLun() {
  for (let i = 0; i < 10; i++) {
    lunCharacter = lun[Math.floor(Math.random() * lun.length)];
    console.log(lunCharacter);   
  }
}

function randomLu() {
  for (let i = 0; i < 10; i++) {
    luCharacter = lu[Math.floor(Math.random() * lu.length)];
    console.log(luCharacter);   
  }
}

function randomL() {
  for (let i = 0; i < 10; i++) {
    lCharacter = l[Math.floor(Math.random() * l.length)];
    console.log(lCharacter);   
  }
}

function randomLus() {
  for (let i = 0; i < 10; i++) {
    lusCharacter = lus[Math.floor(Math.random() * lus.length)];
    console.log(lusCharacter);   
  }
}

function randomLns() {
  for (let i = 0; i < 10; i++) {
    lnsCharacter = lns[Math.floor(Math.random() * lns.length)];
    console.log(lnsCharacter);   
  }
}

function randomUns() {
  for (let i = 0; i < 10; i++) {
    unsCharacter = uns[Math.floor(Math.random() * uns.length)];
    console.log(unsCharacter);   
  }
}

function randomLn() {
  for (let i = 0; i < 10; i++) {
    lnCharacter = ln[Math.floor(Math.random() * ln.length)];
    console.log(lnCharacter);   
  }
}

function randomLs() {
  for (let i = 0; i < 10; i++) {
    lsCharacter = ls[Math.floor(Math.random() * ls.length)];
    console.log(lsCharacter);   
  }
}

function randomUn() {
  for (let i = 0; i < 10; i++) {
    unCharacter = un[Math.floor(Math.random() * un.length)];
    console.log(unCharacter);   
  }
}

function randomUs() {
  for (let i = 0; i < 10; i++) {
    usCharacter = us[Math.floor(Math.random() * us.length)];
    console.log(usCharacter);   
  }
}

function randomNs() {
  for (let i = 0; i < 10; i++) {
    nsCharacter = ns[Math.floor(Math.random() * ns.length)];
    console.log(nsCharacter);   
  }
}

function randomU() {
  for (let i = 0; i < 10; i++) {
    uCharacter = u[Math.floor(Math.random() * u.length)];
    console.log(uCharacter);   
  }
}

function randomN() {
  for (let i = 0; i < 10; i++) {
    nCharacter = n[Math.floor(Math.random() * n.length)];
    console.log(nCharacter);   
  }
}

function randomS() {
  for (let i = 0; i < 10; i++) {
    sCharacter = s[Math.floor(Math.random() * s.length)];
    console.log(sCharacter);   
  }
}