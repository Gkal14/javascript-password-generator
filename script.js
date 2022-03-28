// Assignment Code
var generateBtn = document.querySelector("#generate");


var pwdCriteria = {

    pwdlength: 128,

    pwdLowerCase: ["abcdefghijklmnopqrstuvwxyz"],

    pwdUpperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],

    pwdNumeric: [0,1,2,3,4,5,6,7,8,9],

    pwdCharacter: [ "!","#","$","%","&","'","(",")","*","+","-",".","/",
    ":",";","<","=",">","?","@","[","\"","]",",","^","_","`","{","|","}","~"],
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
 var result=""; 

 var pwdlength= 128;
 var pwdLowerCase;
 var pwdUpperCase;
 var pwdNumeric;
 var pwdCharacter;

 pwdlength= 128;
 pwdCriteria.pwdlength=128;
 result="";


if (pwdlength >8 && pwdlength<128) {
  pwdlength=prompt("Your password must be between 8 and 128 characters long. How long do you want your secure password to be?")
}
}

