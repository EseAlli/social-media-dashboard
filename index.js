const root = document.documentElement.style;
const toggleTheme = document.querySelector(".switch input");
const themeText = document.querySelector(".toggle p");
let mode = "dark";

toggleTheme.addEventListener("click", toggle);

function toggle() {
  mode === "light" ? darkTheme() : lightTheme();
}

function lightTheme() {
  mode = "light";
  root.setProperty("--bg", "hsl(0, 0%, 100%)");
  root.setProperty("--bg-pattern", "hsl(225, 100%, 98%)");
  root.setProperty("--card-bg", "hsl(227, 47%, 96%)");
  root.setProperty("--primary-text", "hsl(228, 12%, 44%)");
  root.setProperty("--secondary-text", "hsl(230, 17%, 14%)");
  root.setProperty("--toggle", "hsl(230, 22%, 74%)");
}

function darkTheme() {
  mode = "dark";
  root.setProperty("--bg", "hsl(230, 17%, 14%)");
  root.setProperty("--bg-pattern", "hsl(232, 19%, 15%)");
  root.setProperty("--card-bg", "hsl(228, 28%, 20%)");
  root.setProperty("--primary-text", "hsl(228, 34%, 66%)");
  root.setProperty("--secondary-text", "hsl(0, 0%, 100%)");
}
