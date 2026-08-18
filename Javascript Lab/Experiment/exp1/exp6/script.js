// ==========================================
// 1. STRING FUNCTIONS
// ==========================================


// Convert string to UPPERCASE
function convertUppercase() {

    const text = document.getElementById("stringInput").value;

    const result = text.toUpperCase();

    document.getElementById("stringOutput").innerHTML =
        "<b>toUpperCase():</b><br>" + result;
}


// Convert string to lowercase
function convertLowercase() {

    const text = document.getElementById("stringInput").value;

    const result = text.toLowerCase();

    document.getElementById("stringOutput").innerHTML =
        "<b>toLowerCase():</b><br>" + result;
}


// Check whether string includes a word
function checkIncludes() {

    const text = document.getElementById("stringInput").value;

    const word = prompt("Enter the word to search:");

    if (word === null || word === "") {
        return;
    }

    const result = text.toLowerCase().includes(word.toLowerCase());

    if (result) {

        document.getElementById("stringOutput").innerHTML =
            "<b>includes():</b><br>" +
            "The string contains <b>" + word + "</b>.";

    } else {

        document.getElementById("stringOutput").innerHTML =
            "<b>includes():</b><br>" +
            "The string does not contain <b>" + word + "</b>.";
    }
}


// Find string length
function findLength() {

    const text = document.getElementById("stringInput").value;

    const result = text.length;

    document.getElementById("stringOutput").innerHTML =
        "<b>length:</b><br>" +
        "Number of characters = " + result;
}



// ==========================================
// 2. EMAIL VALIDATION USING REGEX
// ==========================================

function validateEmail() {

    const email = document.getElementById("emailInput").value.trim();


    // Regular Expression for email validation

    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const isValid = emailRegex.test(email);


    if (isValid) {

        document.getElementById("emailOutput").innerHTML =
            "<span class='success'>" +
            "✓ Valid Email ID" +
            "</span><br><br>" +
            "Email: " + email;

    } else {

        document.getElementById("emailOutput").innerHTML =
            "<span class='error'>" +
            "✗ Invalid Email ID" +
            "</span><br><br>" +
            "Please enter a valid email address.";
    }
}



// ==========================================
// 3. DATA EXTRACTION
// Extract valid email IDs from text
// ==========================================

function extractEmails() {

    const text = document.getElementById("emailText").value;


    // Regex for finding email IDs inside text

    const emailRegex =
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;


    const emails = text.match(emailRegex);


    if (emails && emails.length > 0) {

        let output =
            "<b>Valid Email IDs Found:</b><br><br>";


        emails.forEach(function(email) {

            output +=
                "<span class='email-item'>" +
                email +
                "</span>";

        });


        document.getElementById("extractedEmails").innerHTML =
            output;

    } else {

        document.getElementById("extractedEmails").innerHTML =
            "<span class='error'>" +
            "No valid email IDs found." +
            "</span>";
    }
}



// ==========================================
// 4. TEXT ANALYSIS USING split()
// ==========================================

function analyzeText() {

    const text =
        document.getElementById("analysisText").value.trim();


    if (text === "") {

        document.getElementById("analysisOutput").innerHTML =
            "Please enter some text.";

        return;
    }


    // split() converts the sentence into an array of words

    const words = text.split(/\s+/);


    // Number of words

    const wordCount = words.length;


    // Number of characters

    const characterCount = text.length;


    // Split into sentences

    const sentences =
        text.split(/[.!?]+/).filter(function(sentence) {

            return sentence.trim() !== "";

        });


    const sentenceCount = sentences.length;


    // Find longest word

    let longestWord = "";

    words.forEach(function(word) {

        // Remove punctuation

        const cleanWord =
            word.replace(/[.,!?;:]/g, "");

        if (cleanWord.length > longestWord.length) {

            longestWord = cleanWord;

        }

    });


    // Display analysis

    document.getElementById("analysisOutput").innerHTML =

        "<b>Text Analysis</b><br><br>" +

        "Total Characters: " +
        characterCount +

        "<br>" +

        "Total Words: " +
        wordCount +

        "<br>" +

        "Total Sentences: " +
        sentenceCount +

        "<br>" +

        "Longest Word: " +
        longestWord +

        "<br><br>" +

        "<b>Words using split():</b><br>" +

        words.join(" | ");
}