window.addEventListener('DOMContentLoaded', event => {

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const navbar = document.getElementById('sideNav');

if (!document.getElementById('home')) {
    navbar.classList.add('show-navbar');
} else {
    window.addEventListener('scroll', function () {
        if (window.innerWidth <= 991) {
            if (window.scrollY > 0) {
                navbar.classList.add('show-navbar');
            } else {
                navbar.classList.remove('show-navbar');
            }
        } else {
            navbar.classList.remove('show-navbar');
        }
    });
}





