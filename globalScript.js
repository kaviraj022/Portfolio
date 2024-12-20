// Create the "Move to Top" button dynamically for all pages
let moveToTopBtn = document.createElement("button");
moveToTopBtn.id = "moveToTopBtn";
moveToTopBtn.title = "Go to top";
moveToTopBtn.innerHTML = "↑"; // Button text 

// Add the button to the body
document.body.appendChild(moveToTopBtn);

// Show the button when the user scrolls down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        moveToTopBtn.style.display = "block";
    } else {
        moveToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the page
moveToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
