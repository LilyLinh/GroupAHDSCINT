
// JavaScript Function for Bmi calculator

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

