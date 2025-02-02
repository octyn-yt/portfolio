// Dark Mode Toggle Logic
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode was previously enabled
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
}

// Toggle dark mode
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Toggle button icon
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Copy to clipboard functionality for crypto wallet addresses
const walletAddresses = document.querySelectorAll('.payment-method code');

walletAddresses.forEach((address) => {
    address.addEventListener('click', () => {
        const addressText = address.textContent || address.innerText;
        navigator.clipboard.writeText(addressText)
            .then(() => {
                alert('Address copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    });
});
