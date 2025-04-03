let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Oculta el navbar al hacer scroll hacia abajo
        navbar.classList.add("-translate-y-full");
    } else {
        // Muestra el navbar al hacer scroll hacia arriba
        navbar.classList.remove("-translate-y-full");
    }
    lastScrollY = window.scrollY;
});