function setActiveNavLink() {
    const currentPath = window.location.pathname.split('/')[1];
    const navLinks = document.querySelectorAll('.navbar-items a');
    
    const classToAdd = 'boxglow';

    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/')[1];
        if (currentPath === href) {
            link.classList.add(classToAdd);
        } else {
            link.classList.remove(classToAdd);
        }
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);