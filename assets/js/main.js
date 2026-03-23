    $(document).ready(function () {
        var swiper = new Swiper('.hero_banner', {
            loop: true,
            speed: 1000,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'slide',
            // Responsive
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                }
            }
        });
    });

// Awards Slider ( awards-slider-one)
    $(document).ready(function () {
        var swiper = new Swiper('.awards-slider-one', {
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'slide',
        });
    });

// product Applicatio Slider
    $(document).ready(function () {
        var swiper = new Swiper('.product-applicatio-slider', {
            loop: true,
            speed: 800,
            spaceBetween:10,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'slide',
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1100: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                }
            }
        });
    });

// Navigation Script
    jQuery(document).ready(function($) {
        jQuery('.stellarnav').stellarNav({
            breakpoint: 1200,
            position: 'right',
            menuLabel: '',
            closeLabel: '',
            showArrows: true,
        });
    });


// Read More Button
    document.querySelectorAll('.member-content').forEach(function(card) {
        const desc = card.querySelector('.member-description');
        const btn = card.querySelector('.member-read-more-btn');

        const fullText = desc.innerText;
        const words = fullText.split(' ');

        if (words.length > 30) {
            const shortText = words.slice(0, 40).join(' ') + '...';
            desc.innerText = shortText;
            let expanded = false;
            btn.addEventListener('click', function() {
                if (!expanded) {
                    desc.innerText = fullText;
                    btn.innerText = "Read Less";
                } else {
                    desc.innerText = shortText;
                    btn.innerText = "Read More";
                }
                expanded = !expanded;
            });
        } else {
            btn.style.display = "none";
        }
    });


// Current Page Active Navigation 
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("#main-nav li a").forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage && currentPage.includes(linkPage)) {
                link.classList.add("active");
                link.setAttribute("current-page", "true");
                let parent = link.closest("li");
            while (parent) {
                parent.classList.add("active");
                parent = parent.parentElement.closest("li");
            }
        }
    });


// Counter function with decimal support
    AOS.init({ duration: 1000, once: true });
    function runCounter(counter) {
        const target = parseFloat(counter.getAttribute('data-target'));
        let count = 0;
        const increment = target / 70; 
        const prefix = counter.nextElementSibling?.classList.contains('prefix') ? counter.nextElementSibling.innerText : '';

        function update() {
            count += increment;
            if (count < target) {   
                counter.innerText = target % 1 !== 0 ? count.toFixed(2) : Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
                if (prefix) counter.nextElementSibling.innerText = prefix;
            }
        }
        update();
    }

    function checkCounters() {
        const counters = document.querySelectorAll('.counter:not(.counted)');
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
            counter.classList.add('counted');
            runCounter(counter);
            }
        });
    }
    window.addEventListener('load', checkCounters);
    window.addEventListener('scroll', checkCounters);



// Light Box
    AOS.init({
        duration: 1000,
        once: true
    });

// AOS Init
AOS.init({
    duration: 1000,
    once: true
});

// DOM Elements
const galleryContainer = document.getElementById('image-gallery');
const galleryImages = galleryContainer.querySelectorAll('img');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0; // ✅ FIXED

const currentIndexSpan = document.getElementById('currentIndex');
const totalImagesSpan = document.getElementById('totalImages');

const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Image Data
const imageList = Array.from(galleryImages).map(img => ({
    url: img.src,
    title: img.alt || ''
}));

// Set total images
totalImagesSpan.textContent = imageList.length;

// Click Events
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openLightbox();
    });
});

// Open Lightbox
function openLightbox() {
    showImage(true);
    lightbox.classList.add('active');
    document.body.classList.add('no-scroll');
}

// Close Lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Show Image
function showImage(isFirstLoad = false) {
    if (!imageList.length) return;

    const data = imageList[currentIndex];

    // Update counter
    currentIndexSpan.textContent = currentIndex + 1;

    // Smooth animation
    lightboxImg.style.transition = 'all 0.3s ease';

    if (!isFirstLoad) {
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.95)';
    }

    setTimeout(() => {
        lightboxImg.src = data.url;

        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
    }, 150);
}

// Next Image
function nextImage() {
    currentIndex = (currentIndex + 1) % imageList.length;
    showImage();
}

// Prev Image
function prevImage() {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    showImage();
}

// Controls
closeBtn.onclick = closeLightbox;

nextBtn.onclick = (e) => {
    e.stopPropagation();
    nextImage();
};

prevBtn.onclick = (e) => {
    e.stopPropagation();
    prevImage();
};

// Click outside to close
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
    }
});


// Initialize Animations Time Line
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-out-quad'
    });

