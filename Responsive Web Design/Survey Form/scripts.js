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

  function navMenuToggle() {
    let navMenu = document.getElementById('nav-top-project-link-container');
    let toggleBars = document.getElementById('nav-top-toggle');
    if (navMenu.classList.contains('toggle-nav-top-menu')) {
      navMenu.classList.remove('toggle-nav-top-menu');
      toggleBars.classList.remove('toggle-nav-top-bars');
    } else {
      navMenu.classList.add('toggle-nav-top-menu')
      toggleBars.classList.add('toggle-nav-top-bars');
    }
  }
  