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

particlesJS("particles-gallery", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
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

const gallerySlides = document.querySelectorAll('.gallery-slide');
const galleryPrevBtn = document.getElementById('galleryPrev');
const galleryNextBtn = document.getElementById('galleryNext');

if (gallerySlides.length > 0 && galleryPrevBtn && galleryNextBtn) {
    let gIndex = 0;
    const gMax = gallerySlides.length - 1;

    function showGallerySlide(n) {
        // Убираем активный класс у всех
        gallerySlides.forEach(slide => slide.classList.remove('active'));

        // Зацикливание (последняя -> первая, первая -> последняя)
        if (n >= gallerySlides.length) gIndex = 0;
        else if (n < 0) gIndex = gMax;
        else gIndex = n;

        // Показываем нужное фото
        gallerySlides[gIndex].classList.add('active');
    }

    galleryNextBtn.addEventListener('click', () => {
        showGallerySlide(gIndex + 1);
    });

    galleryPrevBtn.addEventListener('click', () => {
        showGallerySlide(gIndex - 1);
    });

    showGallerySlide(0);
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

const form = document.getElementById('footerForm');
const successMsg = document.getElementById('form-success');
const submitBtn = document.getElementById('submitBtn');

if (form) {
    const serviceID = 'service_im6cqkc';
    const templateID = 'template_79n07im';
    const publicKey = 'TJb_edokz9sSGUw4y';

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        submitBtn.textContent = 'ОТПРАВКА...';
        submitBtn.disabled = true;

        const templateParams = {
            user_name: form.elements.user_name.value,
            user_phone: form.elements.user_phone.value,
            message: form.elements.message.value
        };

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: serviceID,
                template_id: templateID,
                user_id: publicKey,
                template_params: templateParams
            })
        })
        .then(res => {
            if (res.ok) {
                form.reset();
                successMsg.style.display = 'block';
                setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
            } else {
                alert('Произошла ошибка. Попробуйте позже.');
            }
        })
        .catch(err => {
            alert('Ошибка соединения: ' + err);
        })
        .finally(() => {
            submitBtn.textContent = 'ОТПРАВИТЬ СООБЩЕНИЕ';
            submitBtn.disabled = false;
        });
    });
}