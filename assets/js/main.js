document.addEventListener('DOMContentLoaded', () => {
    // Mobile Sidebar Toggle
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn && closeBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
            sidebar.classList.remove('-translate-x-full');
        });

        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebar.classList.add('-translate-x-full');
        });
    }

    // Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});
