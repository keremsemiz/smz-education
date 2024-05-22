document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var cookiePopup = document.querySelector('.cookie__popup');
        var acceptButton = document.getElementById('acceptCookies');

        // Check if cookie is set
        if (!getCookie('visitCount')) {
            // Prepare popup for fade-in
            cookiePopup.style.display = 'block';
            cookiePopup.style.opacity = '0';
            setTimeout(function() {
                cookiePopup.style.opacity = '1';
            }, 10);
        }

        // Listener for accept button
        acceptButton.addEventListener('click', function() {
            // Set cookie and hide popup
            setCookie('visitCount', '1', 7);
            cookiePopup.style.opacity = '0';
            setTimeout(function() {
                cookiePopup.style.display = 'none';
            }, 1000); // Delay to allow fade-out before hiding
        });
    }, 3000); // Popup shows up after 5 seconds
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
