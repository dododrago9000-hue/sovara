const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

const bookingModal = document.getElementById("bookingModal");
const closeBooking = document.getElementById("closeBooking");
const bookingForm = document.getElementById("bookingForm");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

document.querySelectorAll(".primary-btn").forEach(button => {
    button.addEventListener("click", () => {
        bookingModal.classList.add("active");
    });
});

closeBooking.addEventListener("click", () => {
    bookingModal.classList.remove("active");
});

bookingModal.addEventListener("click", (event) => {
    if (event.target === bookingModal) {
        bookingModal.classList.remove("active");
    }
});

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("تم استلام طلب الحجز بنجاح 🍽️");

    bookingForm.reset();
    bookingModal.classList.remove("active");
});