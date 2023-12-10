
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
        "Underweight - Eat, Train, Repeat!",
        "Normal Weight - Keep up the good work!",
        "Overweight - A healthy diet and exercise is adviced .",
        "Obese - Don't Sweat, we'll help you reach your goals"
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


// JavaScript Validation Modal And Message User - Adrian

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



// JavaScript Validation Form - Lihn

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const city = document.getElementById('city').value;
    const agree = document.getElementById('agree').checked;

    const nameError = document.getElementById('nameError');
    const ageError = document.getElementById('ageError');
    const emailError = document.getElementById('emailError');
    const genderError = document.getElementById('genderError');
    const cityError = document.getElementById('cityError');
    const agreeError = document.getElementById('agreeError');

    nameError.textContent = '';
    ageError.textContent = '';
    emailError.textContent = '';
    genderError.textContent = '';
    cityError.textContent = '';
    agreeError.textContent = '';

    if (name === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    }

    if (isNaN(age) || age <= 0) {
      ageError.textContent = 'Please enter a valid age';
      isValid = false;
    }

    if (email === '' || !email.includes('@')) {
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
    }

    if (!gender) {
      genderError.textContent = 'Please select a gender';
      isValid = false;
    }

    if (city === '') {
      cityError.textContent = 'Please select a city';
      isValid = false;
    }

    if (!agree) {
      agreeError.textContent = 'You must agree to the terms and conditions';
      isValid = false;
    }

    return isValid;
  }