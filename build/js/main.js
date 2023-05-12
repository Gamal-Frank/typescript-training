"use strict";
let yearSpan = document.querySelector("span");
let currentYear = new Date().getFullYear();
yearSpan.setAttribute("datetime", currentYear);
yearSpan.textContent = currentYear;
