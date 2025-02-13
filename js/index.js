document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".navbar__links");
    burger.addEventListener("click", function (event) {
        event.stopPropagation();
        navLinks.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});
