let generateBtn = document.querySelector("#generate");
let passwordArray = [];
let passwordLength;
let charset = [];
let allowLower = true;
let allowUpper = true;
let allowNumber = true;
let allowSpecial = true

function promptUser() {
  passwordLength = prompt(
    "This program will provide a randomly-generated pasword using your input criteria. Enter number of characters for your password, 8 to 128."
  );
  while (
    parseInt(passwordLength) < 8 ||
    parseInt(passwordLength) > 128 ||
    passwordLength === ""
  ) {
    passwordLength = prompt(
      "Error: Password must be 8 to 128 characters. Enter number of characters for your password, 8 to 128."
    );
  }
  if (!passwordLength) {
    return;
  }

  allowLower = confirm(
    "Use lowercase letters to generate password? OK for yes, Cancel for no."
  );
  allowUpper = confirm(
    "Use uppercase letters to generate password? OK for yes, Cancel for no."
  );
  allowNumber = confirm(
    "Use numbers to generate password? OK for yes, Cancel for no."
  );
  allowSpecial = confirm(
    "Use special characters to generate password? OK for yes, Cancel for no."
  );
  if (!allowLower && !allowUpper && !allowNumber && !allowSpecial) {
    alert(
      "Error: Cannot generate password as no character types were selected. Please click Generate Password button to start over."
    );
  }
}

// Up to the specified length of the password, push what was returned in getRandomCharacter, which is one random character, into the passwordArray.
function fillArray() {
  for (let i = 0; i < passwordLength; i++) {
    passwordArray.push(getRandomCharacter());
  }
  console.log(passwordArray);
}

// Get a random number from the character set array (charset), and return it in string form as its ascii character.
function getRandomCharacter() {
  let charCode = charset[Math.floor(Math.random() * charset.length)];
  return String.fromCharCode(charCode);
}

// Create the array that will be used to generate the password. The character types that will go into the array are as selected by the user. If the prompt for each type was true, the ascii numbers matching the characters of that type will be pushed into the charset array.
function generateCharsetArray() {
  charset = [];
  if (allowLower) {
    for (let i = 97; i <= 122; i++) {
      charset.push(i);
    }
  }

  if (allowUpper) {
    for (let i = 65; i <= 90; i++) {
      charset.push(i);
    }
  }

  if (allowNumber) {
    for (let i = 48; i <= 57; i++) {
      charset.push(i);
    }
  }

  if (allowSpecial) {
    for (let i = 33; i <= 47; i++) {
      charset.push(i);
    }
    for (let i = 58; i <= 64; i++) {
      charset.push(i);
    }
    for (let i = 91; i <= 96; i++) {
      charset.push(i);
    }
    for (let i = 123; i <= 126; i++) {
      charset.push(i);
    }
  }
}

// Convert the passwordArray containing our password characters into a string and write it into the HTML.
function writePassword() {
  document.getElementById("password").innerHTML = passwordArray.join("");
}

// On click of the generate button, reset the passwordArray and run the functions required to collect input, generate characters to use, fill an array with password characters, and write the password as HTML text.
function generatePassword() {
  passwordArray = [];
  promptUser();
  generateCharsetArray();
  fillArray();
  writePassword();
}

generateBtn.addEventListener("click", generatePassword);