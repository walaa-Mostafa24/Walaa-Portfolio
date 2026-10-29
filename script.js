// ==============================
// LOADER
// ==============================

const loader = document.querySelector(".loader");

function hideLoader() {

    if (loader) {
        loader.classList.add("hide");
    }

}

// لما الصفحة تخلص تحميل
window.addEventListener("load", hideLoader);

// حماية: لو النت بطيء جدًا، اللودر يختفي بعد 1.5 ثانية
setTimeout(hideLoader, 1500);


// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


// ==============================
// CLOSE MOBILE MENU
// ==============================

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

    });

});


// ==============================
// ACTIVE NAVBAR
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}


// Update navbar while scrolling
window.addEventListener("scroll", updateActiveNav);

// Run once when page loads
updateActiveNav();


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .stat-card, .timeline-item, .certificate-card"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


// ==============================
// INTERSECTION OBSERVER
// ==============================

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    // Fallback for old browsers

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==============================
// BACK TO TOP
// ==============================

const backTop = document.querySelector(".back-top");

if (backTop) {

    backTop.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==============================
// PREVENT BROKEN LINKS
// ==============================

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

    });

});