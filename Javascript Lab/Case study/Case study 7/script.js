// Accessing form elements using JavaScript

const form = document.getElementById("registrationForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthday = document.getElementById("birthday");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");


// --------------------------------------------------
// FOCUS EVENT
// --------------------------------------------------

// When an input receives focus
firstName.addEventListener("focus", function () {
    firstName.style.backgroundColor = "#f2f2f2";
});

lastName.addEventListener("focus", function () {
    lastName.style.backgroundColor = "#f2f2f2";
});

email.addEventListener("focus", function () {
    email.style.backgroundColor = "#f2f2f2";
});

password.addEventListener("focus", function () {
    password.style.backgroundColor = "#f2f2f2";
});


// --------------------------------------------------
// CHANGE EVENT
// --------------------------------------------------

// Change event is triggered when the value is changed
// and the user moves away from the input.

firstName.addEventListener("change", function () {
    validateFirstName();
});

lastName.addEventListener("change", function () {
    validateLastName();
});

email.addEventListener("change", function () {
    validateEmail();
});

birthday.addEventListener("change", function () {
    validateBirthday();
});

password.addEventListener("change", function () {
    validatePassword();
});

confirmPassword.addEventListener("change", function () {
    validateConfirmPassword();
});

terms.addEventListener("change", function () {
    validateTerms();
});


// --------------------------------------------------
// VALIDATION FUNCTIONS
// --------------------------------------------------

function validateFirstName() {

    const value = firstName.value.trim();
    const error = document.getElementById("firstNameError");

    if (value === "") {
        error.textContent = "First name is required.";
        return false;
    }

    error.textContent = "";
    return true;
}


function validateLastName() {

    const value = lastName.value.trim();
    const error = document.getElementById("lastNameError");

    if (value === "") {
        error.textContent = "Last name is required.";
        return false;
    }

    error.textContent = "";
    return true;
}


function validateEmail() {

    const value = email.value.trim();
    const error = document.getElementById("emailError");

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        error.textContent = "Email is required.";
        return false;
    }

    if (!emailPattern.test(value)) {
        error.textContent = "Enter a valid email address.";
        return false;
    }

    error.textContent = "";
    return true;
}


function validateBirthday() {

    const value = birthday.value;
    const error = document.getElementById("birthdayError");

    if (value === "") {
        error.textContent = "Birthday is required.";
        return false;
    }

    error.textContent = "";
    return true;
}


function validatePassword() {

    const value = password.value;
    const error = document.getElementById("passwordError");

    if (value === "") {
        error.textContent = "Password is required.";
        return false;
    }

    if (value.length < 6) {
        error.textContent = "Password must contain at least 6 characters.";
        return false;
    }

    error.textContent = "";
    return true;
}


function validateConfirmPassword() {

    const value = confirmPassword.value;
    const error = document.getElementById("confirmPasswordError");

    if (value === "") {
        error.textContent = "Please re-enter your password.";
        return false;
    }

    if (value !== password.value) {
        error.textContent = "Passwords do not match.";
        return false;
    }

    error.textContent = "";
    return true;
}


function validateTerms() {

    const error = document.getElementById("termsError");

    if (!terms.checked) {
        error.textContent = "You must agree to the Terms and Conditions.";
        return false;
    }

    error.textContent = "";
    return true;
}


// --------------------------------------------------
// SUBMIT EVENT
// --------------------------------------------------

form.addEventListener("submit", function (event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Validate every input
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isBirthdayValid = validateBirthday();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isTermsValid = validateTerms();

    const successMessage = document.getElementById("successMessage");

    // Check if all validations are successful
    if (
        isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isBirthdayValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isTermsValid
    ) {

        successMessage.textContent =
            "Registration successful!";

        // Display entered data in console
        console.log("First Name:", firstName.value);
        console.log("Last Name:", lastName.value);
        console.log("Email:", email.value);
        console.log("Birthday:", birthday.value);
        console.log("Password:", password.value);

        // Reset form after successful submission
        form.reset();

    } else {

        successMessage.textContent = "";
    }
});