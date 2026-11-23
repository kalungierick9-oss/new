"use strict";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = encodeURIComponent("Website enquiry — " + data.get("project"));
    const body = encodeURIComponent(
      "Name: " + data.get("name") + "\n" +
      "Reply email: " + data.get("email") + "\n" +
      "Project: " + data.get("project") + "\n\n" +
      "Message:\n" + data.get("message") + "\n\n" +
      "Contact phone: +256732212999"
    );
    window.location.href = "mailto:kalungierick9@gmail.com?subject=" + subject + "&body=" + body;
  });
}
