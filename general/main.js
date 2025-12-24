// FAQ icon change
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    const icon = faq.querySelector(".faq__icon i");
    if (icon) {
      icon.classList.toggle("uil-plus");
      icon.classList.toggle("uil-minus");
    }
  });
});

// nav menu show/hide responsive tablet
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav__menu");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav);

// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.querySelector("nav");

// Ensure the navbar is visible on page load
window.addEventListener("load", () => {
  navbar.style.top = "3.1rem";

  // Detect if the page was truly reloaded (e.g. F5, Ctrl+R)
  const navEntry = performance.getEntriesByType("navigation")[0];
  const navigationType = navEntry && navEntry.type ? navEntry.type : "";

  // If it was a forced reload, remove the "closed" flag.
  // This allows the popup to appear again even if it was previously closed.
  if (navigationType === "reload") {
    localStorage.removeItem("donationPopupClosed");
  }

  // If popup was never closed, schedule it to appear after 3 minutes
  if (localStorage.getItem("donationPopupClosed") !== "true") {
    setTimeout(showDonationPopup, 180000); // 3 minutes
  }
});

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-6rem"; // Adjust based on your navbar height
  } else {
    // Scrolling up
    navbar.style.top = "3.1rem";
  }
  lastScrollTop = scrollTop;
});

// Show donation popup
function showDonationPopup() {
  if (localStorage.getItem("donationPopupClosed") === "true") return;

  const donationPopup = document.querySelector(".donation__popup");
  const overlay = document.querySelector(".overlay");

  // Exit if elements don't exist
  if (!donationPopup || !overlay) return;

  donationPopup.style.display = "block";
  overlay.style.display = "block";
  donationPopup.style.opacity = "0";
  overlay.style.opacity = "0";

  setTimeout(() => {
    donationPopup.style.opacity = "1";
    overlay.style.opacity = "1";
  }, 10);
}

// Close donation popup
const closeBtnElement = document.querySelector(".close-btn");
if (closeBtnElement) {
  closeBtnElement.addEventListener("click", (e) => {
    e.preventDefault();
    const donationPopup = document.querySelector(".donation__popup");
    const overlay = document.querySelector(".overlay");

    if (donationPopup && overlay) {
      donationPopup.style.opacity = "0";
      overlay.style.opacity = "0";
      setTimeout(() => {
        donationPopup.style.display = "none";
        overlay.style.display = "none";
        // Mark popup as closed so it won't show until next forced reload
        localStorage.setItem("donationPopupClosed", "true");
      }, 300); // Fade-out duration
    }
  });
}
