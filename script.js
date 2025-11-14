// Reserve button
document.getElementById("reserveBtn").addEventListener("click", () => {
  alert("Thank you for choosing Kahani Hostel! Reservation feature coming soon.");
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! We’ve received your message and will reply soon.");
  e.target.reset();
});
// Navigation Bar
let lastScrollTop = 0;
    const navbar = document.querySelector("header");


    window.addEventListener("scroll", function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down → hide navbar
        navbar.style.top = "-90px";
      } else {
        // Scrolling up → show navbar
        navbar.style.top = "0";
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

