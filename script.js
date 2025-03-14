document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Dropdown handling for mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', (e) => {
            if(window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');

                dropdowns.forEach(other => {
                    if(other !== dropdown) other.classList.remove('active');
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
            if(!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
            }
        
    }); 

    // Set active menu berdasarkan halaman saat ini
    const currentPage = location.pathname.split('/').pop();
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            let dropdown = link.closest('.dropdown');
            if(dropdown) {
                dropdown.classList.add('active');
            }
        }
    });
}); 