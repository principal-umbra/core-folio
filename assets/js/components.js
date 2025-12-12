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

/* -------------------------
   Footer (components.css)
   ------------------------- */
.site-footer {
  background: #1C1D22;
  color: #FFFFFF;
  padding: 56px 20px 24px;
  font-family: "LXGW WenKai Mono TC", sans-serif;
}

.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 32px;
  align-items: start;
  padding: 0 32px;
}

.footer-col {}

/* Brand */
.footer-logo {
  width: 120px;
  height: auto;
  display: block;
  margin-bottom: 12px;
}
.footer-tagline {
  color: rgba(255,255,255,0.9);
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
}

/* Titles */
.footer-title {
  font-weight: 600;
  color: rgba(255,255,255,0.95);
  font-size: 15px;
  margin-bottom: 10px;
}

/* Links and lists */
.footer-col ul { list-style: none; margin: 0; padding: 0; }
.footer-col li { margin-bottom: 8px; }

.footer-col a {
  color: #3B82F6; /* link blue */
  text-decoration: none;
  transition: color .18s ease;
}

.footer-col a:hover {
  color: #60A5FA;
  text-decoration: underline;
}

/* Contact text */
.footer-contact li {
  color: rgba(255,255,255,0.9);
}

/* Social list (icons or plain links) */
.social-list { display:flex; flex-direction:column; gap:8px; padding:0; margin:0; }

/* Legal area */
.footer-legal {
  border-top: 1px solid rgba(255,255,255,0.04);
  margin-top: 28px;
  padding-top: 18px;
}
.legal-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:16px;
  flex-wrap:wrap;
}
.copyright { color: rgba(255,255,255,0.7); font-size:13px; margin:0; }
.meta { color: rgba(255,255,255,0.6); font-size:13px; margin:0; }
.meta a { color:#3B82F6; }

/* Responsive */
@media (max-width: 991px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
  .footer-logo { width: 100px; }
}
@media (max-width: 600px) {
  .footer-inner { grid-template-columns: 1fr; text-align:center; }
  .footer-logo { margin: 0 auto 12px; }
  .social-list { align-items:center; }
  .legal-inner { flex-direction:column; gap:8px; text-align:center; }
}

