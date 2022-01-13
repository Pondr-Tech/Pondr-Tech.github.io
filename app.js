window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})

window.addEventListener('load', (e) => {
    document.getElementById('fixed-space').style.height = document.getElementById('nav').offsetHeight + 'px';
})