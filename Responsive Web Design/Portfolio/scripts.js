// Could add preference to local storage
// Handle light-mode-dark-mode toggle
// help from: https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
function toggleLightDarkMode() {
  if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      toggleLightDarkMode();
    } else {
      document.documentElement.classList.add("light");
      toggleLightDarkMode();
    }
  }
}

//  Handle accordion
//  help from: https://www.w3schools.com/howto/howto_js_accordion.asp
let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("accordion-active");

    // move view to accordion header if header clicked while active
    if (!this.classList.contains("accordion-active")) {
      // location.href = `#${this.id}`;
      
      // Set behavior such that if scrolled past header, then return to top of header
      // But if haven't, do nothing
    }

    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
