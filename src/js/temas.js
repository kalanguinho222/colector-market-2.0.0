let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")
const enableDarkMode = () => {
  document.body.classList.add("claro")
  localStorage.setItem("darkmode", "active")
}
const disableDarkMode = () => {
  document.body.classList.remove("claro")
  localStorage.setItem("darkmode", null)
}
if (darkmode === "active") enableDarkMode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode")
  darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})