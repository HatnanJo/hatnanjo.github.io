// Function to check if the user has already given consent
function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    // If consent is already set to "accepted" or "declined," hide the banner
    if (consent === 'accepted' || consent === 'declined') {
        document.getElementById('cookiebanner').style.display = 'none'; // Change to 'cookiebanner'
    }
}

// Function to set the cookie consent in local storage
function setCookieConsent(consent) {
    localStorage.setItem('cookieConsent', consent);
    document.getElementById('cookiebanner').style.display = 'none'; // Change to 'cookiebanner'
}

// Check cookie consent when the page loads
window.addEventListener('DOMContentLoaded', () => {
    checkCookieConsent();

    // Event listeners for Accept and Decline buttons
    document.getElementById('acceptCookies').addEventListener('click', () => setCookieConsent('accepted'));
    document.getElementById('declineCookies').addEventListener('click', () => setCookieConsent('declined'));
});
