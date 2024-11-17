document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".nav__hamburger");
    const closeButton = document.querySelector(".menu__button-close");
    const menu = document.querySelector(".menu");

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
    } else {
        console.error("Required elements are missing in the DOM.");
    }
});

