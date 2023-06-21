const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//User clicks password button and two passwords are generated
//each password should be 15char long
//Set password length (num of chars)
//Copy on click feature - copied to clipboard
//Toggle synmbols/not

let passwordLength = 15;
let password1 = [];
let password2 = [];
let generatePasswordButton = document.getElementById("generatebtn");
let passwordField1 = document.getElementById("password-1");
let passwordField2 = document.getElementById("password-2");

function getRandomChar(){
    return characters[Math.floor(Math.random()*characters.length)];
}

function generateRandomPassword(){
    let newPass = [];
    for(i= 0; i<passwordLength; i++){
        newPass.push(getRandomChar());
    }
    return newPass.join("");
}


console.log(passwordField1);

//On click --> generate 2x passwords
//Set fields to password types
generatePasswordButton.addEventListener("click", function() {
    passwordField1.textContent = generateRandomPassword();
    passwordField2.textContent = generateRandomPassword();
})



