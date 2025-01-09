// ===================== TOGGLE STYLE SWITVHER =================

const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
});


// =================== THEME COLOR ===================

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    localStorage.setItem('color', color);
    changeColor();
}

function changeColor() {
    alternateStyles.forEach((style) => {
        if (localStorage.getItem('color') === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}

if (localStorage.getItem('color') !== null) {
    changeColor();
}

// ================== THEME DARK AND LIGHT MODE =============

const dayNight = document.querySelector('.day-night');
const homeImg = document.querySelector('.home-img img'); // Home section image
const aboutImg = document.querySelector('.about-img img'); // About section image

dayNight.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        // Set dark mode images
        homeImg.src = 'assets/img/himansh.png';
        aboutImg.src = 'assets/img/himansh.png';
    } else {
        // Set light mode images
        localStorage.setItem('theme', 'light');
        homeImg.src = 'assets/img/himansh2.png';
        aboutImg.src = 'assets/img/himansh2.png';
    }
    updateIcon();
});

function themeMode() {
    const imgElement = document.querySelector('.home-img img');
    if (localStorage.getItem('theme') !== null) {
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.remove('dark');
            // Set dark mode images 75535041362
            homeImg.src = 'assets/img/himansh.png';
            aboutImg.src = 'assets/img/himansh.png';
        } else {
            // Set light mode images
            document.body.classList.add('dark');
            homeImg.src = 'assets/img/himansh2.png';
            aboutImg.src = 'assets/img/himansh2.png';
        }
    }
    updateIcon();
}

themeMode();

function updateIcon() {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.remove('fa-moon');
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.remove('fa-sun');
        dayNight.querySelector('i').classList.add('fa-moon');

    }
}








