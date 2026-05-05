particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#FF8C00" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "detect_on": "window",
        "events": { "onhover": { "enable": true, "mode": "bubble" } },
        "modes": { "bubble": { "distance": 200, "size": 0, "duration": 2, "opacity": 0 } }
    },
    "retina_detect": true
});

particlesJS("particles-contacts", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#FF8C00" },
        "shape": { "type": "circle" },
        "opacity": {
            "value": 0.9,
            "random": false
        },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#FF8C00", "opacity": 0, "width": 1 },
        "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": { "enable": false },
            "onclick": { "enable": false }
        }
    },
    "retina_detect": true
});

let slideIndex = 0;
let slideTimer;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

if (slides.length > 0) {
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (n >= slides.length) slideIndex = 0;
        else if (n < 0) slideIndex = slides.length - 1;
        else slideIndex = n;

        slides[slideIndex].classList.add('active');
        if (dots[slideIndex]) dots[slideIndex].classList.add('active');

        resetTimer();
    }

    function resetTimer() {
        clearTimeout(slideTimer);
        slideTimer = setTimeout(() => {
            showSlide(slideIndex + 1);
        }, 5000);
    }

    window.changeSlide = function (direction) {
        showSlide(slideIndex + direction);
    };

    window.currentSlide = function (index) {
        showSlide(index);
    };

    showSlide(0);
}

const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');
const headerEl = document.querySelector('.header');

if (burgerBtn && mainNav) {
    const toggleMenu = (isOpening) => {
        const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

        if (isOpening) {
            burgerBtn.classList.add('active');
            mainNav.classList.add('open');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = scrollWidth + 'px';
            if (headerEl) headerEl.style.paddingRight = scrollWidth + 'px';
        } else {
            burgerBtn.classList.remove('active');
            mainNav.classList.remove('open');
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
                if (headerEl) headerEl.style.paddingRight = '';
            }, 400);
        }
    };

    burgerBtn.addEventListener('click', () => {
        const isOpen = mainNav.classList.contains('open');
        toggleMenu(!isOpen);
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });
}
