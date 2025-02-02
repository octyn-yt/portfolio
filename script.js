// Check for dark mode in localStorage and apply it
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Dark Mode Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the user's dark mode preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Burger Menu Toggle
document.getElementById('burger-menu').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
});

// Clipboard copy function for donation grid items
const paymentMethods = document.querySelectorAll('.payment-method');
paymentMethods.forEach((method) => {
    method.addEventListener('click', () => {
        const address = method.getAttribute('data-clipboard-text');
        navigator.clipboard.writeText(address)
            .then(() => {
                alert('Address copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });
});
