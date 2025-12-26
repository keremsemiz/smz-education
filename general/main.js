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

  // Only show popup once per session unless user manually reloads
  const popupShownThisSession = sessionStorage.getItem("donationPopupShown");
  const popupPermanentlyClosed = localStorage.getItem("donationPopupClosed");

  // If popup was never closed permanently and hasn't been shown this session
  if (popupPermanentlyClosed !== "true" && popupShownThisSession !== "true") {
    setTimeout(() => {
      showDonationPopup();
      sessionStorage.setItem("donationPopupShown", "true");
    }, 180000); // 3 minutes
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

// Mission Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const dots = document.querySelectorAll(".dot");

  // Exit if carousel elements don't exist on this page
  if (!track || items.length === 0) return;

  let currentSlide = 0;
  const totalSlides = items.length;

  // Auto-advance interval (every 6 seconds)
  let autoAdvanceInterval;

  function goToSlide(slideIndex) {
    // Remove active class from all items
    items.forEach((item) => item.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current item
    items[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");

    currentSlide = slideIndex;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
  }

  function startAutoAdvance() {
    autoAdvanceInterval = setInterval(nextSlide, 6000);
  }

  function stopAutoAdvance() {
    clearInterval(autoAdvanceInterval);
  }

  // Event listeners for buttons
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoAdvance();
      startAutoAdvance(); // Restart auto-advance after manual interaction
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoAdvance();
      startAutoAdvance();
    });
  }

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      stopAutoAdvance();
      startAutoAdvance();
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!track) return;

    if (e.key === "ArrowLeft") {
      prevSlide();
      stopAutoAdvance();
      startAutoAdvance();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      stopAutoAdvance();
      startAutoAdvance();
    }
  });

  // Pause auto-advance on hover
  if (track.parentElement) {
    track.parentElement.addEventListener("mouseenter", stopAutoAdvance);
    track.parentElement.addEventListener("mouseleave", startAutoAdvance);
  }

  // Start auto-advance
  startAutoAdvance();
});
