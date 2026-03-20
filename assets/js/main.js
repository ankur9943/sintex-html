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




// Navigation Script
jQuery(document).ready(function($) {
    jQuery('.stellarnav').stellarNav({
        breakpoint: 960,
        position: 'right',
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
    
	