/* ********** Slide ********** */

import formValidation from "./modules/contact-form.js";
import slider from "./modules/slider.js";
import themeSwitcher from "./modules/theme-switcher.js";

/* ********** ContactForm ********** */
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  slider();
  formValidation();
});

themeSwitcher(".theme-switcher", "[data-light]");
