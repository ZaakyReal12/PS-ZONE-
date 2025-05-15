// Smooth scroll untuk navigasi internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.getAttribute('href') !== "#") {
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Profile Management
document.addEventListener('DOMContentLoaded', function() {
    const profileSection = document.getElementById('profileSection');
    const loginButton = document.getElementById('loginButton');
    const profileDropdown = document.getElementById('profileDropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const signOutButton = document.getElementById('signOutButton');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userEmail = document.getElementById('userEmail');

    // Check login status
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedEmail = localStorage.getItem('userEmail');

    if (isLoggedIn === 'true' && storedEmail) {
        // Tampilkan section profile dan sembunyikan tombol login
        profileSection.classList.remove('hidden');
        loginButton.classList.add('hidden');

        // Set username dari email (ambil bagian sebelum @)
        const username = storedEmail.split('@')[0];
        userNameDisplay.textContent = username;
        userEmail.textContent = storedEmail;
    }

    // Toggle dropdown menu saat klik profile
    profileDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    // Tutup dropdown ketika klik di luar
    document.addEventListener('click', function(event) {
        if (!profileDropdown.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // Handle logout
    signOutButton.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    });
});

// Mobile menu functionality
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});