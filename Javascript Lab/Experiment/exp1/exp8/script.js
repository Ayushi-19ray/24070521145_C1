
// Accessing form fields

const form = document.getElementById("gymForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const ageInput = document.getElementById("age");
const membershipInput = document.getElementById("membership");


// Error message elements

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const ageError = document.getElementById("ageError");
const membershipError = document.getElementById("membershipError");

const successMessage = document.getElementById("successMessage");


// --------------------------------------------------
// FULL NAME VALIDATION
// --------------------------------------------------

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Name is required.";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        return false;
    }

    else if (name.length < 3) {

        nameError.textContent = "Name must contain at least 3 characters.";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        return false;
    }

    else if (!/^[A-Za-z ]+$/.test(name)) {

        nameError.textContent = "Name can contain only letters and spaces.";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        return false;
    }

    else {

        nameError.textContent = "✓ Valid name";
        nameError.style.color = "green";

        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");

        return true;
    }
}


// --------------------------------------------------
// EMAIL VALIDATION
// --------------------------------------------------

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Email is required.";
        emailError.style.color = "red";

        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        return false;
    }

    else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailError.style.color = "red";

        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        return false;
    }

    else {

        emailError.textContent = "✓ Valid email";
        emailError.style.color = "green";

        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");

        return true;
    }
}


// --------------------------------------------------
// MOBILE NUMBER VALIDATION
// --------------------------------------------------

function validateMobile() {

    const mobile = mobileInput.value.trim();

    const mobilePattern = /^[6-9][0-9]{9}$/;


    if (mobile === "") {

        mobileError.textContent =
            "Mobile number is required.";

        mobileError.style.color = "red";

        mobileInput.classList.add("invalid");
        mobileInput.classList.remove("valid");

        return false;
    }

    else if (!/^[0-9]+$/.test(mobile)) {

        mobileError.textContent =
            "Mobile number must contain only digits.";

        mobileError.style.color = "red";

        mobileInput.classList.add("invalid");
        mobileInput.classList.remove("valid");

        return false;
    }

    else if (!mobilePattern.test(mobile)) {

        mobileError.textContent =
            "Enter a valid 10-digit Indian mobile number.";

        mobileError.style.color = "red";

        mobileInput.classList.add("invalid");
        mobileInput.classList.remove("valid");

        return false;
    }

    else {

        mobileError.textContent = "✓ Valid mobile number";
        mobileError.style.color = "green";

        mobileInput.classList.add("valid");
        mobileInput.classList.remove("invalid");

        return true;
    }
}


// --------------------------------------------------
// AGE VALIDATION
// --------------------------------------------------

function validateAge() {

    const age = Number(ageInput.value);


    if (ageInput.value === "") {

        ageError.textContent = "Age is required.";
        ageError.style.color = "red";

        ageInput.classList.add("invalid");
        ageInput.classList.remove("valid");

        return false;
    }

    else if (age < 16 || age > 60) {

        ageError.textContent =
            "Age must be between 16 and 60 years.";

        ageError.style.color = "red";

        ageInput.classList.add("invalid");
        ageInput.classList.remove("valid");

        return false;
    }

    else {

        ageError.textContent = "✓ Valid age";
        ageError.style.color = "green";

        ageInput.classList.add("valid");
        ageInput.classList.remove("invalid");

        return true;
    }
}


// --------------------------------------------------
// MEMBERSHIP VALIDATION
// --------------------------------------------------

function validateMembership() {

    if (membershipInput.value === "") {

        membershipError.textContent =
            "Please select a membership plan.";

        membershipError.style.color = "red";

        membershipInput.classList.add("invalid");
        membershipInput.classList.remove("valid");

        return false;
    }

    else {

        membershipError.textContent =
            "✓ Membership plan selected";

        membershipError.style.color = "green";

        membershipInput.classList.add("valid");
        membershipInput.classList.remove("invalid");

        return true;
    }
}


// --------------------------------------------------
// LIVE INPUT EVENTS
// --------------------------------------------------

// Name validation while typing
nameInput.addEventListener("input", validateName);


// Email validation while typing
emailInput.addEventListener("input", validateEmail);


// Mobile validation while typing
mobileInput.addEventListener("input", validateMobile);


// Age validation while typing
ageInput.addEventListener("input", validateAge);


// Membership validation when changed
membershipInput.addEventListener("change", validateMembership);


// --------------------------------------------------
// FOCUS EVENTS
// --------------------------------------------------

nameInput.addEventListener("focus", function() {

    nameError.textContent = "Enter your full name.";

    nameError.style.color = "#555";
});


emailInput.addEventListener("focus", function() {

    emailError.textContent =
        "Example: user@gmail.com";

    emailError.style.color = "#555";
});


mobileInput.addEventListener("focus", function() {

    mobileError.textContent =
        "Enter 10 digits starting with 6-9.";

    mobileError.style.color = "#555";
});


ageInput.addEventListener("focus", function() {

    ageError.textContent =
        "Age should be between 16 and 60.";

    ageError.style.color = "#555";
});


membershipInput.addEventListener("focus", function() {

    membershipError.textContent =
        "Select one membership plan.";

    membershipError.style.color = "#555";
});


// --------------------------------------------------
// FORM SUBMIT EVENT
// --------------------------------------------------

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();


    // Validate all fields again

    const nameValid = validateName();
    const emailValid = validateEmail();
    const mobileValid = validateMobile();
    const ageValid = validateAge();
    const membershipValid = validateMembership();


    if (
        nameValid &&
        emailValid &&
        mobileValid &&
        ageValid &&
        membershipValid
    ) {

        successMessage.textContent =
            "✓ Application submitted successfully!";

        successMessage.style.color = "green";

        // Clear form
        form.reset();

        // Remove green borders
        nameInput.classList.remove("valid");
        emailInput.classList.remove("valid");
        mobileInput.classList.remove("valid");
        ageInput.classList.remove("valid");
        membershipInput.classList.remove("valid");

    }

    else {

        successMessage.textContent =
            "Please correct the errors before submitting.";

        successMessage.style.color = "red";
    }

});

