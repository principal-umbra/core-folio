document.addEventListener("DOMContentLoaded", () => {

    function initNavbarLogic() {
        const navbar = document.querySelector(".navbar");
        const hero = document.querySelector(".hero");

        if (!navbar || !hero) return false;

        let scrollTriggerPoint = 0;

        const calculateTriggerPoint = () => {
            scrollTriggerPoint = hero.offsetHeight * 0.15;
        };

        calculateTriggerPoint();
        window.addEventListener("resize", calculateTriggerPoint);

        window.addEventListener("scroll", () => {
            if (window.scrollY > scrollTriggerPoint) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }
        });
/* ======================================================
   HOME — HERO COVER SCROLL EFFECT
====================================================== */

const homeIntroInner = document.querySelector(".home-intro-inner");
const hero = document.querySelector(".hero-home");

if (homeIntroInner && hero) {
    const heroHeight = hero.offsetHeight;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Progreso del scroll limitado al alto del hero
        const progress = Math.min(scrollY / heroHeight, 1);

        // De 100vh → 0vh
        const translateY = (1 - progress) * heroHeight;

        homeIntroInner.style.transform = `translateY(${translateY}px)`;
    });
}

        // Submenús
        const submenuItems = navbar.querySelectorAll(".navbar-item.has-submenu");

        submenuItems.forEach(item => {
            const submenu = item.querySelector(".submenu");

            item.addEventListener("mouseenter", () => {
                submenu.classList.add("submenu-visible");
            });

            item.addEventListener("mouseleave", () => {
                submenu.classList.remove("submenu-visible");
            });
        });

        return true;
    }

    if (!initNavbarLogic()) {
        const observer = new MutationObserver((mutations, obs) => {
            if (initNavbarLogic()) {
                obs.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

});


// --- footer: año dinámico (works even if footer is loaded later) ---
(function setFooterYearWhenReady(){
  function setYear() {
    const el = document.getElementById('footer-year');
    if (el) {
      el.textContent = new Date().getFullYear();
      return true;
    }
    return false;
  }

  if (!setYear()) {
    // observe DOM in case footer is injected later
    const obs = new MutationObserver((mutations, observer) => {
      if (setYear()) observer.disconnect();
    });
    obs.observe(document.documentElement || document.body, { childList: true, subtree: true });
  }
})();




