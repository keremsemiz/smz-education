// Lazy load GoFundMe embed for better performance
(function () {
  "use strict";

  // Function to load GoFundMe embed when popup is shown
  function loadGoFundMeEmbed() {
    const gfmEmbed = document.querySelector(".gfm-embed");

    if (gfmEmbed && !gfmEmbed.classList.contains("loaded")) {
      // Mark as loaded
      gfmEmbed.classList.add("loaded");

      // Create and append the script if not already present
      if (
        !document.querySelector(
          'script[src*="gofundme.com/static/js/embed.js"]'
        )
      ) {
        const script = document.createElement("script");
        script.src = "https://www.gofundme.com/static/js/embed.js";
        script.defer = true;
        document.body.appendChild(script);
      }
    }
  }

  // Observe when donation popup becomes visible
  const donationPopup = document.querySelector(".donation__popup");

  if (donationPopup) {
    // Use Intersection Observer for better performance
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadGoFundMeEmbed();
            observer.disconnect();
          }
        });
      });

      observer.observe(donationPopup);
    } else {
      // Fallback for older browsers - check display property
      const checkVisibility = setInterval(() => {
        const style = window.getComputedStyle(donationPopup);
        if (style.display !== "none") {
          loadGoFundMeEmbed();
          clearInterval(checkVisibility);
        }
      }, 500);

      // Stop checking after 30 seconds
      setTimeout(() => clearInterval(checkVisibility), 30000);
    }
  }
})();
