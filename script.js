// Assignment Code
var generateBtn = document.querySelector("#generate");


var pwdCriteria = {

    pwdlength: 0,

    // 26 lower case
    pwdLowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    // 26 upper case
    pwdUpperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    // 10 numbers
    pwdNumeric: [0,1,2,3,4,5,6,7,8,9],
    // 31 special characters
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

 pwdLength= 0;
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
    return "Your Secure Password";
  }
  else {
    if (pwdlength <8 || pwdlength>128) {
      alert ("Your password must be between 8 and 128 characters long");
      return "Your Secure Password"
  }
  else {
    varOptions();
   while (pwdCriteria.passwordLength<pwdlength){
    if (lowerCase===false && upperCase===false && numbers===false && characters===false){
       alert("YOUR PASSWORD MUST CONTAIN EITHER lower case letters, UPPER CASE LETTERS, NUMBERS OR SPECIAL CHARACTERS")
      varOptions();    
      } 
      else{
        if (lowerCase===true && pwdCriteria.passwordLength<pwdlength){
          var low=pwdCriteria.pwdLowerCase[Math.floor(Math.random()*26)]
          // console.log(low)
          result=result+low;
          console.log(result)
          pwdCriteria.passwordLength++;
          // console.log("hello")
        }     if (upperCase===true && pwdCriteria.passwordLength<pwdlength){
          var up=pwdCriteria.pwdUpperCase[Math.floor(Math.random()*26)]
          result=result+up;
          console.log(result)
          pwdCriteria.passwordLength++;
          
      }  if (numbers===true && pwdCriteria.passwordLength<pwdlength){
        var num=pwdCriteria.pwdNumeric[Math.floor(Math.random()*26)]
        result=result+num;
        console.log(result)
        pwdCriteria.passwordLength++;

    } if (characters===true && pwdCriteria.passwordLength<pwdlength){
      var char=pwdCriteria.pwdCharacter[Math.floor(Math.random()*26)]
      result=result+char;
      console.log(result)
      pwdCriteria.passwordLength++;
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
}
}
}