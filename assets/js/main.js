const themeToggle = document.querySelector("#theme-toggle");

const currentTheme = localStorage.getItem("theme");
var pageTheme = document.body;

let isDark = true

if (currentTheme == "dark") {
  pageTheme.classList.add("accessibility-contrast");
}

function themeMode() {
    isDark = !isDark;
    pageTheme.classList.toggle("accessibility-contrast");

    let theme = "light";
    if (pageTheme.classList.contains("accessibility-contrast")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", themeMode)