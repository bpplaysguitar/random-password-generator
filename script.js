// Assignment Code
let generateBtn = document.querySelector("#generate");    
let passwordLength

// Write password to the #password input
function writePassword() {
  // let password = generatePassword();
  // let passwordText = document.querySelector("#password");

  let useUppercase;
  let useLowercase;
  let useSpecial;

  // passwordText.value = password;

  passwordLength = prompt("Set number of characters for your password, 8 to 128.");
  useLowercase = confirm("Use lowercase letters?");
  useUppercase = confirm("Use uppercase letters?");
  useNumbers = confirm("Use numbers?");
  useSpecial = confirm("Use special characters?");
  
  if (useLowercase && useUppercase && useNumbers && useSpecial) {
    randomLuns();
  }
  else if (useLowercase && useUppercase && useNumbers && !useSpecial) {
    randomLun();
  }
  else if (useLowercase && useUppercase && !useNumbers && !useSpecial) {
    randomLu();
  }
  else if (useLowercase && !useUppercase && !useNumbers && !useSpecial) {
    randomL();
  }
  else if (useLowercase && useUppercase && !useNumbers && useSpecial) {
    randomLus();
  }
  else if (useLowercase && !useUppercase && useNumbers && useSpecial) {
    randomLns();
  }
  else if (!useLowercase && useUppercase && useNumbers && useSpecial) {
    randomUns();
  }
  else if (useLowercase && !useUppercase && useNumbers && !useSpecial) {
    randomLn();
  }
  else if (useLowercase && useUppercase && !useNumbers && useSpecial) {
    randomLs();
  }
  else if (!useLowercase && useUppercase && useNumbers && !useSpecial) {
    randomUn();
  }
  else if (!useLowercase && useUppercase && !useNumbers && useSpecial) {
    randomUs();
  }
  else if (!useLowercase && !useUppercase && useNumbers && useSpecial) {
    randomNs();
  }
  else if (!useLowercase && useUppercase && !useNumbers && !useSpecial) {
    randomU();
  }
  else if (!useLowercase && !useUppercase && useNumbers && !useSpecial) {
    randomN();
  }
  else if (!useLowercase && !useUppercase && !useNumbers && useSpecial) {
    randomS();
  }
  // TODO else {prompt again if they didn't select any character types}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//___________________________________________
// Create arrays of all possible non-order-specific combinations of lower, upper, number, and special so random characters will be selected from the appropriate array using a corresponding function. Note that I doubled up the instances of each number in order to help them be equally represented since they are much smaller in count than other characters.

// lower upper number special 
let luns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// lower upper number
let lun = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// lower upper 
let lu = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// lower 
let l = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// lower upper special 
let lus = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// lower number special 
let lns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// upper number special 
let uns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// lower number
let ln = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// lower special 
let ls = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// upper number 
let un = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// upper special 
let us = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// number special 
let ns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// upper
let u = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// number 
let n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// special 
let s = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
//___________________________________________


// functions for each of the arrays
function randomLuns() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    lunsCharacter = luns[Math.floor(Math.random() * luns.length)];
    document.getElementById("password").innerHTML += lunsCharacter;
    console.log(lunsCharacter);   
  }
}

function randomLun() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    lunCharacter = lun[Math.floor(Math.random() * lun.length)];
    document.getElementById("password").innerHTML += lunCharacter;
    console.log(lunCharacter);   
  }
}

function randomLu() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    luCharacter = lu[Math.floor(Math.random() * lu.length)];
    document.getElementById("password").innerHTML += luCharacter;
    console.log(luCharacter);   
  }
}

function randomL() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    lCharacter = l[Math.floor(Math.random() * l.length)];
    document.getElementById("password").innerHTML += lCharacter;
    console.log(lCharacter);   
  }
}

function randomLus() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    lusCharacter = lus[Math.floor(Math.random() * lus.length)];
    document.getElementById("password").innerHTML += lusCharacter;
    console.log(lusCharacter);   
  }
}

function randomLns() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    lnsCharacter = lns[Math.floor(Math.random() * lns.length)];
    document.getElementById("password").innerHTML += lnsCharacter;
    console.log(lnsCharacter);   
  }
}

function randomUns() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    unsCharacter = uns[Math.floor(Math.random() * uns.length)];
    document.getElementById("password").innerHTML += unsCharacter;
    console.log(unsCharacter);   
  }
}

function randomLn() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    lnCharacter = ln[Math.floor(Math.random() * ln.length)];
    document.getElementById("password").innerHTML += lnCharacter;
    console.log(lnCharacter);   
  }
}

function randomLs() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    lsCharacter = ls[Math.floor(Math.random() * ls.length)];
    document.getElementById("password").innerHTML += lsCharacter;
    console.log(lsCharacter);   
  }
}

function randomUn() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    unCharacter = un[Math.floor(Math.random() * un.length)];
    document.getElementById("password").innerHTML += unCharacter;
    console.log(unCharacter);   
  }
}

function randomUs() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    usCharacter = us[Math.floor(Math.random() * us.length)];
    document.getElementById("password").innerHTML += usCharacter;
    console.log(usCharacter);   
  }
}

function randomNs() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    nsCharacter = ns[Math.floor(Math.random() * ns.length)];
    document.getElementById("password").innerHTML += nsCharacter;
    console.log(nsCharacter);   
  }
}

function randomU() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    uCharacter = u[Math.floor(Math.random() * u.length)];
    document.getElementById("password").innerHTML += uCharacter;
    console.log(uCharacter);   
  }
}

function randomN() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    nCharacter = n[Math.floor(Math.random() * n.length)];
    document.getElementById("password").innerHTML += nCharacter;
    console.log(nCharacter);   
  }
}

function randomS() {
  document.getElementById("password").innerHTML = "";
  for (let i = 0; i < Number(passwordLength); i++) {
    sCharacter = s[Math.floor(Math.random() * s.length)];
    document.getElementById("password").innerHTML += sCharacter;
    console.log(sCharacter);   
  }
}