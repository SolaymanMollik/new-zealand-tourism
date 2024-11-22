console.clear();

// dark and light theam ///////////////////////////////////////////////////////////////////

function changeTheme() {
  const isDarkMode = document.body.classList.toggle("dark");
  document.body.classList.toggle("light", !isDarkMode);
  // Save the user's preference to localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  // responsive teex content chenge
  document.getElementById("res-theme-menu").textContent = isDarkMode
    ? "Light Theme"
    : "Dark Theme";
}
function applyTheme() {
  const getTheme = localStorage.getItem("theme");
  document.body.classList.toggle(getTheme == "light" ? "light" : "dark");
}
function theam() {
  setTimeout(changeTheme, 500);
}

applyTheme();

// responsiveNevigationMenu show and hide
const bar = document.getElementById("bar");

bar.addEventListener("click", () => {
  const responsiveNavMenuSec = document.querySelector(".res-nav-menu-sec");
  const isHidden = responsiveNavMenuSec.classList.toggle("block");
  if (isHidden) {
    bar.classList.add("fa-xmark");
    bar.classList.remove("fa-bars");
  } else {
    bar.classList.add("fa-bars");
    bar.classList.remove("fa-xmark");
  }
});
