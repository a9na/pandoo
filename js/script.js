document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".nav__hamburger");
    const closeButton = document.querySelector(".menu__button-close");
    const menu = document.querySelector(".menu");

    const handleResize = () => {
        if (window.innerWidth >= 1024) { 
            menu.classList.remove("display");
            hamburgerButton.style.display = "none"; 
            closeButton.style.display = "none";
        } else {
            hamburgerButton.style.display = "block"; 
            closeButton.style.display = "none"; 
        }
    };

    if (hamburgerButton && closeButton && menu) {
        hamburgerButton.addEventListener("click", () => {
            menu.classList.add("display"); 
            hamburgerButton.style.display = "none"; 
            closeButton.style.display = "block"; 
        });

        closeButton.addEventListener("click", () => {
            menu.classList.remove("display");
            closeButton.style.display = "none"; 
            hamburgerButton.style.display = "block"; 
        });

        window.addEventListener("resize", handleResize);

        handleResize();
    } else {
        console.error("Required elements are missing in the DOM.");
    }
});
