
// JavaScript Function for Bmi calculator - Glen

function calculateBMI() {
    
    //  input form the user
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Check if the input is valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display BMI
    document.getElementById('result').innerHTML = "Your BMI: " + bmi.toFixed(2);

    // Output message based on BMI range
    var messages = [
        "Underweight - You may need to gain some weight.",
        "Normal Weight - Keep up the good work!",
        "Overweight - Consider maintaining a healthy diet and exercise.",
        "Obese - Consult with a healthcare professional."
    ];

    var index = 0;
    if (bmi < 18.5) {
        index = 0;
    } else if (bmi < 24.9) {
        index = 1;
    } else if (bmi < 29.9) {
        index = 2;
    } else {
        index = 3;
    }

    document.getElementById('message').innerHTML = messages[index];
}


// JavaScript - Adrian

const form = document.querySelector("#form");
const nameInput = document.querySelector("#nameUser");
const emailInput = document.querySelector("#emailUser");
const subjectSelected = document.querySelector("#subjectUser");
const checkBox = document.querySelector("#checkboxTerms");

console.log(form);
console.log(nameInput);
console.log(emailInput);
console.log(subjectSelected);

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //Verify if name is empty
    if (nameInput.value === ""){
        alert("Please fill up your Name");
        return;
    }

    //Verify if name is empty and is valid
    if (emailInput.value === "" || !emailValidation(emailInput.value)){
        alert("Please fill up your Email");
        return;
    }

    //Verify if options is selected
    if (subjectUser.value === ""){
        alert("Please fill up the subject");
        return;
    }

    if (checkBox.checked){
        console.log("User OK");
    }else{
        alert("Please check the box to agree to receive comunications");
        return;
    }

    //if all the fields are filled up, submit form
    form.submit();
})


function emailValidation(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true;
    }

    return false;

}


function spanMsgDayTime(){
    if (new Date().getHours() < 12) {
        document.getElementById("span-msg-hourday").innerText = "Good Morning";
    } else if (new Date().getHours() >= 12 && new Date().getHours() <= 18){
        document.getElementById("span-msg-hourday").innerHTML = "Good Afternoon";
    }
    else{
        document.getElementById("span-msg-hourday").innerHTML = "Good Evening";
    }
}
