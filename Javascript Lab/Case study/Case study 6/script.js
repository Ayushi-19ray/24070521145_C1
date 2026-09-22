// 1. Basic String Operations

function performBasicOperations() {

    let str = document.getElementById("basicString").value;

    if (str === "") {
        document.getElementById("basicOutput").innerHTML =
            "Please enter a string.";
        return;
    }

    let output = `
        <strong>Original String:</strong> ${str}<br>
        <strong>Length:</strong> ${str.length}<br>
        <strong>Uppercase:</strong> ${str.toUpperCase()}<br>
        <strong>Lowercase:</strong> ${str.toLowerCase()}<br>
        <strong>First Character:</strong> ${str.charAt(0)}
    `;

    document.getElementById("basicOutput").innerHTML = output;
}


// 2. String Methods
// substring(), indexOf(), split(), replace()

function performStringMethods() {

    let str = document.getElementById("methodString").value;
    let search = document.getElementById("searchText").value;
    let replaceText = document.getElementById("replaceText").value;
    let replacement = document.getElementById("replacement").value;

    if (str === "") {
        document.getElementById("methodOutput").innerHTML =
            "Please enter a string.";
        return;
    }

    let substringResult = str.substring(0, 5);

    let indexResult = search !== ""
        ? str.indexOf(search)
        : "Enter text to search";

    let splitResult = str.split(" ").join(" | ");

    let replaceResult = replaceText !== ""
        ? str.replace(replaceText, replacement)
        : "Enter text to replace";

    let output = `
        <strong>substring(0, 5):</strong> ${substringResult}<br>
        <strong>indexOf():</strong> ${indexResult}<br>
        <strong>split():</strong> ${splitResult}<br>
        <strong>replace():</strong> ${replaceResult}
    `;

    document.getElementById("methodOutput").innerHTML = output;
}


// 3. Case Study: Reverse a String

function reverseString() {

    let str = document.getElementById("reverseInput").value;

    if (str === "") {
        document.getElementById("reverseOutput").innerHTML =
            "Please enter a string.";
        return;
    }

    let reversed = str.split("").reverse().join("");

    document.getElementById("reverseOutput").innerHTML =
        `<strong>Reversed String:</strong> ${reversed}`;
}


// 4. Case Study: Count Vowels in a Paragraph

function countVowels() {

    let paragraph = document.getElementById("paragraphInput").value;

    if (paragraph === "") {
        document.getElementById("vowelOutput").innerHTML =
            "Please enter a paragraph.";
        return;
    }

    let count = 0;

    for (let character of paragraph.toLowerCase()) {

        if ("aeiou".includes(character)) {
            count++;
        }
    }

    document.getElementById("vowelOutput").innerHTML =
        `<strong>Number of Vowels:</strong> ${count}`;
}