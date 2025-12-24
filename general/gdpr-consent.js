// GDPR Cookie Consent Banner
(function () {
  "use strict";

  const CONSENT_COOKIE_NAME = "smz_cookie_consent";
  const CONSENT_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

  // Check if consent has been given and is still valid
  function hasValidConsent() {
    const consent = getCookie(CONSENT_COOKIE_NAME);
    if (!consent) return false;

    try {
      const consentData = JSON.parse(consent);
      const now = new Date().getTime();

      // Check if consent has expired (15 minutes)
      if (now - consentData.timestamp > CONSENT_DURATION) {
        // Consent expired, remove cookie
        deleteCookie(CONSENT_COOKIE_NAME);
        return false;
      }

      return true;
    } catch (e) {
      return false;
    }
  }

  // Get cookie by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  // Set cookie
  function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
  }

  // Delete cookie
  function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  // Save consent preferences
  function saveConsent(preferences) {
    const consentData = {
      timestamp: new Date().getTime(),
      preferences: preferences,
    };

    // Set cookie for 15 minutes
    setCookie(CONSENT_COOKIE_NAME, JSON.stringify(consentData), 15);

    // Hide the banner
    hideBanner();
  }

  // Show the consent banner
  function showBanner() {
    // Check if donation popup is shown, wait for it to be closed
    const donationPopup = document.querySelector(".donation__popup");
    const overlay = document.querySelector(".overlay");

    if (donationPopup && overlay) {
      const checkDonationClosed = setInterval(function () {
        if (
          donationPopup.style.display === "none" ||
          getComputedStyle(donationPopup).display === "none"
        ) {
          clearInterval(checkDonationClosed);
          displayBanner();
        }
      }, 500);
    } else {
      displayBanner();
    }
  }

  function displayBanner() {
    const banner = document.getElementById("cookie-consent-banner");
    const overlay = document.getElementById("cookie-consent-overlay");

    if (banner && overlay) {
      banner.classList.add("show");
      overlay.classList.add("show");
    }
  }

  // Hide the consent banner
  function hideBanner() {
    const banner = document.getElementById("cookie-consent-banner");
    const overlay = document.getElementById("cookie-consent-overlay");

    if (banner && overlay) {
      banner.classList.remove("show");
      overlay.classList.remove("show");
    }
  }

  // Initialize the consent banner
  function initCookieConsent() {
    // Check if we already have valid consent
    if (hasValidConsent()) {
      return;
    }

    // Create the banner HTML
    createBannerHTML();

    // Show banner after a short delay
    setTimeout(showBanner, 1000);

    // Set up event listeners
    setupEventListeners();
  }

  // Create the banner HTML
  function createBannerHTML() {
    const bannerHTML = `
            <div id="cookie-consent-overlay" class="cookie-consent-overlay"></div>
            <div id="cookie-consent-banner" class="cookie-consent-banner">
                <div class="cookie-consent-content">
                    <div class="cookie-consent-header">
                        <h3>Our use of cookies and other technologies.</h3>
                    </div>
                    
                    <div class="cookie-consent-body">
                        <p>We, SMZ Education gUG, use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our <a href="/privacy/">Privacy Policy</a> and <a href="/cookies/">Cookie Policy</a>.</p>
                        
                        <div class="cookie-types">
                            <div class="cookie-type">
                                <div class="cookie-type-header">
                                    <h4>Essential Cookies</h4>
                                    <label class="cookie-toggle">
                                        <input type="checkbox" id="essential-cookies" checked disabled>
                                        <span class="cookie-toggle-slider"></span>
                                    </label>
                                </div>
                                <p class="cookie-type-description">Required for the website to function properly. These cannot be disabled. Essential cookies ensure basic functionalities and security features of the website which are allowed under European Union law No. 2016/679 (GDPR).</p>
                            </div>
                            
                            <div class="cookie-type">
                                <div class="cookie-type-header">
                                    <h4>Analytics Cookies</h4>
                                    <label class="cookie-toggle">
                                        <input type="checkbox" id="analytics-cookies" checked>
                                        <span class="cookie-toggle-slider"></span>
                                    </label>
                                </div>
                                <p class="cookie-type-description">Help us understand how visitors interact with our website (Google Analytics, Search Console). This information is purely anonymous and cannot be used to identify you. Device Information and Log Data may be collected for this purpose and are deleted after a short period entailing two weeks.</p>
                            </div>
                            
                            <div class="cookie-type">
                                <div class="cookie-type-header">
                                    <h4>Advertising Cookies</h4>
                                    <label class="cookie-toggle">
                                        <input type="checkbox" id="advertising-cookies" checked>
                                        <span class="cookie-toggle-slider"></span>
                                    </label>
                                </div>
                                <p class="cookie-type-description">Used to display relevant advertisements (Google AdSense) and other third-party advertising partners (GoFundMe). This information aids us in donations and is used to improve our advertising and outreach efforts.</p>
                            </div>
                        </div>
                        
                        <p style="font-size: 0.85rem; margin-top: 1rem;">This consent is valid for 15 minutes. After that, you will be asked again.</p>
                    </div>
                    
                    <div class="cookie-consent-actions">
                        <button id="accept-all-cookies" class="cookie-btn cookie-btn-primary">Accept All</button>
                        <button id="accept-selected-cookies" class="cookie-btn cookie-btn-secondary">Save Preferences</button>
                        <button id="reject-all-cookies" class="cookie-btn cookie-btn-text">Reject All</button>
                    </div>
                </div>
            </div>
        `;

    // Insert before closing body tag
    document.body.insertAdjacentHTML("beforeend", bannerHTML);
  }

  // Set up event listeners
  function setupEventListeners() {
    // Accept all cookies
    const acceptAllBtn = document.getElementById("accept-all-cookies");
    if (acceptAllBtn) {
      acceptAllBtn.addEventListener("click", function () {
        saveConsent({
          essential: true,
          analytics: true,
          advertising: true,
        });
      });
    }

    // Accept selected cookies
    const acceptSelectedBtn = document.getElementById(
      "accept-selected-cookies"
    );
    if (acceptSelectedBtn) {
      acceptSelectedBtn.addEventListener("click", function () {
        const analytics = document.getElementById("analytics-cookies").checked;
        const advertising = document.getElementById(
          "advertising-cookies"
        ).checked;

        saveConsent({
          essential: true,
          analytics: analytics,
          advertising: advertising,
        });
      });
    }

    // Reject all cookies (except essential)
    const rejectAllBtn = document.getElementById("reject-all-cookies");
    if (rejectAllBtn) {
      rejectAllBtn.addEventListener("click", function () {
        saveConsent({
          essential: true,
          analytics: false,
          advertising: false,
        });
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCookieConsent);
  } else {
    initCookieConsent();
  }
})();
