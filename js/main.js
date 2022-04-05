$(function () {
    let section = $("nav .links li a");

    section.on("click", function () {
        
        $("html, body").animate({
            scrollTop: $($(this).data("section")).offset().top
        }, 800)
    });
});


let navBar = document.querySelector("nav"),
    menuIcon = document.querySelector("nav .icon"),
    closeIcon = document.querySelector("nav .close"),
    links = document.querySelector("nav .links");

window.onscroll = function () {
    if (window.scrollY > 0) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
};

function toggleMenu() {
    links.classList.toggle("active");
};

menuIcon.addEventListener("click", function () {
    toggleMenu();
});
closeIcon.addEventListener("click", function () {
    toggleMenu();
});