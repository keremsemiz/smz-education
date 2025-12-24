document.addEventListener("DOMContentLoaded", function () {
  var donationPopup = document.querySelector(".donation__popup");
  var closeButton = document.querySelector(".close-btn");
  var overlay = document.querySelector(".overlay");

  // Exit if elements don't exist on this page
  if (!donationPopup || !closeButton || !overlay) {
    return;
  }

  // Check if the popup has been closed before
  if (!localStorage.getItem("donationPopupClosed")) {
    setTimeout(function () {
      // Show popup and overlay on page load or refresh
      donationPopup.style.display = "block";
      overlay.style.display = "block";
      donationPopup.style.opacity = "0";
      overlay.style.opacity = "0";
      setTimeout(function () {
        donationPopup.style.opacity = "1";
        overlay.style.opacity = "1";
      }, 10);
    }, 3000); // Popup shows up after 3 seconds
  }

  // Listener for close button
  closeButton.addEventListener("click", function (event) {
    event.preventDefault();
    donationPopup.style.opacity = "0";
    overlay.style.opacity = "0";
    setTimeout(function () {
      donationPopup.style.display = "none";
      overlay.style.display = "none";
      // Set localStorage to remember that the popup has been closed
      localStorage.setItem("donationPopupClosed", "true");
    }, 1); // Delay to allow fade-out before hiding
  });
});
