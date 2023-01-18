const d = document,
  ls = localStorage;
const themeSwitcher = (btn, selector) => {
  const $themeBtn = d.querySelector(btn);
  const $selector = d.querySelectorAll(selector);

  const darkTheme = () => {
      $selector.forEach((e) => {
        e.classList.remove("light-mode");
      });
      $themeBtn.classList.add("active");
      ls.setItem("theme", "dark");
    },
    lightTheme = () => {
      $selector.forEach((e) => {
        e.classList.add("light-mode");
      });
      $themeBtn.classList.remove("active");

      ls.setItem("theme", "light");
    };

  d.addEventListener("click", (e) => {
    if (e.target.matches(`${btn} *`) || e.target.matches(btn)) {
      if ($themeBtn.dataset.theme === "dark") {
        darkTheme();
        $themeBtn.dataset.theme = "light";
      } else {
        $themeBtn.dataset.theme = "dark";
        lightTheme();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
    if (ls.getItem("theme") === "light") {
      lightTheme();
    }

    if (ls.getItem("theme") === "dark") {
      darkTheme();
    }
  });
};

export default themeSwitcher;
