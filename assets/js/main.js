// modalTicket

var btnTickets = document.querySelectorAll(".js-buy-ticket");
var modal = document.querySelector(".modal-tickets");
var close = document.querySelector(".modal-header-close");
var notCloseContainer = document.querySelector(".modal-container");

function showModalTicket() {
    modal.classList.add("js-open-modal");
}

function closeModalTicket() {
    modal.classList.remove("js-open-modal");
}
for (const btnTicket of btnTickets) {
    btnTicket.addEventListener("click", showModalTicket);
}
close.addEventListener("click", closeModalTicket);
modal.addEventListener("click", closeModalTicket);
notCloseContainer.addEventListener("click", function(event) {
    event.stopPropagation();
});

// menu header

var header = document.querySelector(".header");
var clientHeight = header.clientHeight;
var menu = document.querySelector(".menu-icon");

menu.addEventListener("click", function() {
    var isClosed = header.clientHeight;
    if (isClosed === clientHeight) {
        header.style.height = "auto";
    } else {
        header.style.height = "46px";
    }
});
// ẩn menu khi click menu con
var menuItems = document.querySelectorAll(".nav .nav-item a[href*='#']");
for (const menuItem of menuItems) {
    menuItem.addEventListener("click", function(event) {
        var isParentMenuItem =
            this.nextElementSibling &&
            this.nextElementSibling.classList.contains("subnav");
        if (isParentMenuItem) {
            event.preventDefault();
        } else {
            console.log(this);
            header.style.height = "46px";
        }
    });
}