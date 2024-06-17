document.addEventListener('DOMContentLoaded', function() {
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navComponents = document.getElementById('nav-components');

    const pages = document.querySelectorAll('.page');

    // Function to show selected page and hide others
    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    // Event listeners for navigation clicks
    navHome.addEventListener('click', function(event) {
        event.preventDefault();
        showPage('home');
    });

    navAbout.addEventListener('click', function(event) {
        event.preventDefault();
        showPage('about');
    });

    navComponents.addEventListener('click', function(event) {
        event.preventDefault();
        showPage('components');
    });
});