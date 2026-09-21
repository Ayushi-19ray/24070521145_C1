function displayData(data) {

    let tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    data.forEach(function(student) {

        let row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.marks}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}


// Fetch API
document.getElementById("fetchBtn").addEventListener("click", function() {

    document.getElementById("message").textContent =
        "Loading using Fetch()...";

    fetch("data.json")
        .then(function(response) {

            if (!response.ok) {
                throw new Error("JSON file could not be loaded");
            }

            return response.json();
        })
        .then(function(data) {

            displayData(data);

            document.getElementById("message").textContent =
                "Data loaded successfully using Fetch()";
        })
        .catch(function(error) {

            document.getElementById("message").textContent =
                "Error: " + error.message;
        });
});


// jQuery $.getJSON()
document.getElementById("jqueryBtn").addEventListener("click", function() {

    document.getElementById("message").textContent =
        "Loading using $.getJSON()...";

    $.getJSON("data.json", function(data) {

        displayData(data);

        document.getElementById("message").textContent =
            "Data loaded successfully using $.getJSON()";

    }).fail(function(jqXHR, textStatus, errorThrown) {

        document.getElementById("message").textContent =
            "Error: " + textStatus;
    });
});