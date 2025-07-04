document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle-switch");
  const htmlElement = document.documentElement;

  // Check the user's preference from localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // Set initial mode based on user's preference
  if (isDarkMode) {
    htmlElement.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  // Function to toggle between dark mode and light mode
  function toggleDarkMode() {
    htmlElement.classList.toggle("dark-mode");
    const isDarkModeNow = htmlElement.classList.contains("dark-mode");

    // Save the user's preference to localStorage
    localStorage.setItem("darkMode", isDarkModeNow);
  }

  // Event listener for the toggle switch
  toggleSwitch.addEventListener("change", toggleDarkMode);
});
