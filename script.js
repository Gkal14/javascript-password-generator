// Assignment Code
var generateBtn = document.querySelector("#generate");


var pwdCriteria = {

    pwdlength: 0,

    pwdLowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    pwdUpperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

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

 var pwdlength= 0;
 var pwdLowerCase;
 var pwdUpperCase;
 var pwdNumeric;
 var pwdCharacter;

 passwordLength= 0;
 pwdCriteria.passwordLength=0;
 result="";

// checking for password criteria
if (pwdlength <8 || pwdlength>128) {
  pwdlength=prompt("Your password must be between 8 and 128 characters long. How long do you want your secure password to be?");

if (pwdlength===null){
  return "Password Generator";
} 
else {
  if (!isFinite(pwdlength)) {
    alert ("You must enter a number");
    return "Password Generator";
  }
  else {
    if (pwdlength <8 || pwdlength>128) {
      alert ("Your password must be between 8 and 128 characters long");
      return "Password Generator"
  }
  else {
    varOptions();
   if (pwdCriteria.passwordLength<pwdlength){
    if (lowerCase===false && upperCase===false && numbers===false && characters===false){
       alert("YOUR PASSWORD MUST CONTAIN EITHER lower case letters, UPPER CASE LETTERS, NUMBERS OR SPECIAL CHARACTERS")
      varOptions();    
      } else return "Your Secure Password"
    }
   }
  }

}
}
}

// function to follow criteria
function varOptions () {
  lowerCase= confirm("Would you like to have lower case letters in your password?")
  upperCase= confirm("Would you like to have upper case letters in your password?")
  numbers= confirm("Would you like to have numbers in your password?")
  characters= confirm("Would you like to have special characters in your password?")
}
