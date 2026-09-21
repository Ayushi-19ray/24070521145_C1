const themeSelect = document.getElementById("themeSelect");
const status = document.getElementById("status");


// Apply selected theme

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

    themeSelect.value = theme;
}


// Save theme

function saveTheme() {

    const selectedTheme = themeSelect.value;

    localStorage.setItem("theme", selectedTheme);

    applyTheme(selectedTheme);

    status.textContent =
        "Theme saved successfully.";
}


// Load theme

function loadTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {

        applyTheme(savedTheme);

        status.textContent =
            "Theme loaded from localStorage.";

    } else {

        status.textContent =
            "No saved theme found.";
    }
}


// Clear preference

function clearPreferences() {

    localStorage.removeItem("theme");

    applySystemTheme();

    status.textContent =
        "Theme preferences cleared.";
}


// Check system theme

function applySystemTheme() {

    const systemDark =
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (systemDark) {

        applyTheme("dark");

    } else {

        applyTheme("light");
    }
}


// When page loads

window.onload = function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {

        applyTheme(savedTheme);

        status.textContent =
            "Saved theme loaded automatically.";

    } else {

        applySystemTheme();

        status.textContent =
            "Using system theme preference.";
    }
};