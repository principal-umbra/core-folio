document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const logoImg = document.getElementById("navbar-logo-img");

    const logoDefault = navbar.getAttribute("data-logo-default");
    const logoScrolled = navbar.getAttribute("data-logo-scrolled");

    // Detectar hero height dinámicamente
    const hero = document.querySelector(".hero");
    let scrollTriggerPoint = 0;

    const calculateTriggerPoint = () => {
        if (hero) {
            scrollTriggerPoint = hero.offsetHeight * 0.5;
        }
    };

    calculateTriggerPoint();
    window.addEventListener("resize", calculateTriggerPoint);

    // Scroll behavior
    window.addEventListener("scroll", () => {
        if (window.scrollY > scrollTriggerPoint) {
            navbar.classList.add("navbar-scrolled");
            logoImg.src = logoScrolled;
        } else {
            navbar.classList.remove("navbar-scrolled");
            logoImg.src = logoDefault;
        }
    });

    // Submenús con fade
    const submenuItems = document.querySelectorAll(".navbar-item.has-submenu");

    submenuItems.forEach(item => {
        const submenu = item.querySelector(".submenu");

        item.addEventListener("mouseenter", () => {
            submenu.classList.add("submenu-visible");
        });

        item.addEventListener("mouseleave", () => {
            submenu.classList.remove("submenu-visible");
        });
    });
});
