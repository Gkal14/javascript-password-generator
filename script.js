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