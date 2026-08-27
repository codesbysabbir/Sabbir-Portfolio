// ================================
// THEME
// ================================

const body = document.body;
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("sabbir-theme");

if (savedTheme === "light") {
  body.classList.add("light");
}

updateThemeIcon();


themeToggle.addEventListener("click", () => {

  body.classList.toggle("light");

  const isLight =
    body.classList.contains("light");

  localStorage.setItem(
    "sabbir-theme",
    isLight ? "light" : "dark"
  );

  updateThemeIcon();

});


function updateThemeIcon() {

  themeToggle.textContent =
    body.classList.contains("light")
      ? "☾"
      : "☼";

}


// ================================
// MOBILE MENU
// ================================

const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.getElementById("nav");


menuBtn.addEventListener("click", () => {

  nav.classList.toggle("open");

  menuBtn.textContent =
    nav.classList.contains("open")
      ? "×"
      : "☰";

});


nav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    menuBtn.textContent = "☰";

  });

});


// ================================
// CURRENT YEAR
// ================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ================================
// SCROLL REVEAL
// ================================

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


// ================================
// NAVBAR SHADOW
// ================================

const navbar =
  document.querySelector(".navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    navbar.style.boxShadow =
      "0 10px 40px rgba(0,0,0,.12)";

  } else {

    navbar.style.boxShadow = "none";

  }

});