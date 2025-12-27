// Service Worker Registration Script
// Add this to your main HTML file before closing </body> tag

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "✅ Service Worker registered successfully:",
          registration.scope
        );

        // Check for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          console.log("🔄 Service Worker update found");

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New service worker available, prompt user to refresh
              if (
                confirm(
                  "A new version of this website is available. Reload to update?"
                )
              ) {
                window.location.reload();
              }
            }
          });
        });
      })
      .catch((error) => {
        console.error("❌ Service Worker registration failed:", error);
      });
  });

  // Listen for messages from service worker
  navigator.serviceWorker.addEventListener("message", (event) => {
    console.log("Message from Service Worker:", event.data);
  });

  // Listen for controller change (new service worker activated)
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    console.log("🔄 Service Worker controller changed");
  });
}

// Handle online/offline events
window.addEventListener("online", () => {
  console.log("✅ Back online");
  document.body.classList.remove("offline");
  // Show a notification that connection is restored
  showConnectionStatus("online");
});

window.addEventListener("offline", () => {
  console.log("📡 Gone offline");
  document.body.classList.add("offline");
  // Show a notification that connection is lost
  showConnectionStatus("offline");
});

// Optional: Show connection status notification
function showConnectionStatus(status) {
  // Remove existing notification
  const existing = document.querySelector(".connection-notification");
  if (existing) existing.remove();

  // Create notification
  const notification = document.createElement("div");
  notification.className = `connection-notification ${status}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${status === "online" ? "#00bf8e" : "#f7c94b"};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease;
    font-weight: 600;
  `;

  notification.textContent =
    status === "online" ? "✅ Back online!" : "📡 You are offline";

  document.body.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add CSS animations
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  body.offline {
    filter: grayscale(0.3);
  }
`;
document.head.appendChild(style);
