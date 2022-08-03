let theme = localStorage.getItem("data-theme");
const themeToggle = document.querySelector("#theme-toggle");

const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
};

if (theme === "dark") {
  changeThemeToDark();
}

themeToggle.addEventListener("click", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
