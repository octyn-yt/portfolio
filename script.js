// Theme Toggle Logic
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode was previously enabled
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';  // Change to Sun icon for dark mode
} else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';  // Default to Moon icon for light mode
}

// Add event listener to toggle theme
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Toggle button icon
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');  // Save theme to localStorage
    } else {
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');  // Save theme to localStorage
    }
});
