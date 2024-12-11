/*!
 * Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
 */

document.addEventListener("DOMContentLoaded", () => {
    const sidebarWrapper = document.getElementById("sidebar-wrapper");
    const menuToggle = document.querySelector(".menu-toggle");
    const scrollTriggers = document.querySelectorAll(
        "#sidebar-wrapper .js-scroll-trigger"
    );
    const scrollToTop = document.querySelector(".scroll-to-top");
    let scrollToTopVisible = false;

    // Toggle sidebar menu
    menuToggle.addEventListener("click", (event) => {
        event.preventDefault();
        toggleSidebar();
    });

    // Close sidebar menu on scroll trigger click
    scrollTriggers.forEach((trigger) => {
        trigger.addEventListener("click", closeSidebar);
    });

    // Toggle the menu icon
    function toggleMenuIcon() {
        const menuBars = menuToggle.querySelector(".fa-bars");
        const menuTimes = menuToggle.querySelector(".fa-xmark");

        if (menuBars) {
            menuBars.classList.replace("fa-bars", "fa-xmark");
        }
        if (menuTimes) {
            menuTimes.classList.replace("fa-xmark", "fa-bars");
        }
    }

    // Toggle sidebar visibility
    function toggleSidebar() {
        sidebarWrapper.classList.toggle("active");
        menuToggle.classList.toggle("active");
        toggleMenuIcon();
    }

    // Close sidebar
    function closeSidebar() {
        sidebarWrapper.classList.remove("active");
        menuToggle.classList.remove("active");
        toggleMenuIcon();
    }

    // Show/hide scroll-to-top button
    document.addEventListener("scroll", () => {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 100 && !scrollToTopVisible) {
            fadeIn(scrollToTop);
            scrollToTopVisible = true;
        } else if (scrollTop <= 100 && scrollToTopVisible) {
            fadeOut(scrollToTop);
            scrollToTopVisible = false;
        }
    });

    // Fade out element
    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= 0.1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    // Fade in element
    function fadeIn(el, display = "block") {
        el.style.opacity = 0;
        el.style.display = display;
        (function fade() {
            let opacity = parseFloat(el.style.opacity);
            if ((opacity += 0.1) <= 1) {
                el.style.opacity = opacity;
                requestAnimationFrame(fade);
            }
        })();
    }
});
