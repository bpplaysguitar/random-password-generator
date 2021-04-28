// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength;
let useLowercase;
let useUppercase;
let useNumbers;
let useSpecial;
let lowercaseAscii;
let uppercaseAscii;
let numberAscii;
let specialAscii;
let pwArray = [];

function generatePassword() {
  passwordLength = prompt(
    "This program will provide a randomly-generated pasword using your input criteria. Enter number of characters for your password, 8 to 128."
  );
  while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || passwordLength === "") {
    passwordLength = prompt(
      "Error: Password must be 8 to 128 characters. Enter number of characters for your password, 8 to 128."
    );
  }
  useLowercase = confirm(
    "Use lowercase letters in the password? OK for yes, Cancel for no."
  );
  useUppercase = confirm(
    "Use uppercase letters in the password? OK for yes, Cancel for no."
  );
  useNumbers = confirm(
    "Use numbers in the password? OK for yes, Cancel for no."
  );
  useSpecial = confirm(
    "Use special characters in the password? OK for yes, Cancel for no."
  );

  // Depending on the repsonses to character types, we will run one of the functions named in these if statements. Each will pull from the character types specified, Lower, Upper, Number, Special.
  if (useLowercase && useUppercase && useNumbers && useSpecial) {
    randomLuns();
  } else if (useLowercase && useUppercase && useNumbers && !useSpecial) {
    randomLun();
  } else if (useLowercase && useUppercase && !useNumbers && !useSpecial) {
    randomLu();
  } else if (useLowercase && !useUppercase && !useNumbers && !useSpecial) {
    randomL();
  } else if (useLowercase && useUppercase && !useNumbers && useSpecial) {
    randomLus();
  } else if (useLowercase && !useUppercase && useNumbers && useSpecial) {
    randomLns();
  } else if (!useLowercase && useUppercase && useNumbers && useSpecial) {
    randomUns();
  } else if (useLowercase && !useUppercase && useNumbers && !useSpecial) {
    randomLn();
  } else if (useLowercase && !useUppercase && !useNumbers && useSpecial) {
    randomLs();
  } else if (!useLowercase && useUppercase && useNumbers && !useSpecial) {
    randomUn();
  } else if (!useLowercase && useUppercase && !useNumbers && useSpecial) {
    randomUs();
  } else if (!useLowercase && !useUppercase && useNumbers && useSpecial) {
    randomNs();
  } else if (!useLowercase && useUppercase && !useNumbers && !useSpecial) {
    randomU();
  } else if (!useLowercase && !useUppercase && useNumbers && !useSpecial) {
    randomN();
  } else if (!useLowercase && !useUppercase && !useNumbers && useSpecial) {
    randomS();
  } else {
    alert(
      "Error: Cannot generate password as no character types were selected. Please click Generate Password button to start over."
    );
  }
  return;
  }

// WHAT I CAN'T BLOODY FIGURE OUT: (using functions below this section)
// randomLuns() {
//  if pwArray.length is less than passwordLength, run getLowercase() to push one lowercase character to the array. At this point pwArray has 1 character in it.
// 
// if pwArray.length is less than passwordLength, run getUppercase() to push one uppercase character to the array. At this point pwArray has 2 characters in it.
// 
// if pwArray.length is less than passwordLength, run getNumber() to push a number character to the array.
// 
// if pwArray.length is lesss than passwordLength, run getSpecial() to push a special char to the array.
//
// go back to beginning to see if you need to run getLower()
//
// when pwArray.length is the same as passwordLength, stop pushing to the array. 
// }




// functions to get a single character from each character type 
function getLowercase() {
  let lowercaseAscii = Math.floor(Math.random() * 26) + 97;
  pwArray.push(lowercaseAscii);
}

function getUppercase() {
  let uppercaseAscii = Math.floor(Math.random() * 26) + 65;
  pwArray.push(uppercaseAscii);
}

function getNumber() {
  let numberAscii = Math.floor(Math.random() * 10) + 48;
  pwArray.push(numberAscii);
} 

function getSpecial() {
  let specialArray = [33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126]
  let specialAscii = specialArray[Math.floor(Math.random() * specialArray.length)];
  pwArray.push(specialAscii);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
