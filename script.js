let generateBtn = document.querySelector("#generate");
let generateBtn2 = document.querySelector("#test");
let passwordArray =[];
let passwordLength = 10;
let charset = [];
let allowLower = true;
let allowUpper = true;
let allowNumber = true;
let allowSpecial = true;


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

function testBtn() {
  passwordArray = [];
  generateCharsetArray();
  fillArray();
}

generateBtn2.addEventListener("click", testBtn);
// generateBtn.addEventListener("click", generatePassword);
