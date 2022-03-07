const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
}

// Slider
$('.tariffs-card-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 370,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        }
    ]
});

$('.private').on('click', function(e) {
    const footerCompany = $('.private_list');
    if (footerCompany.hasClass('footer__list_active')) {
        footerCompany.removeClass('footer__list_active')
    } else {
        footerCompany.addClass('footer__list_active');
    }
})

$('.company').on('click', function() {
    const footerCompany = $('.company_list');
    if (footerCompany.hasClass('footer__list_active')) {
        footerCompany.removeClass('footer__list_active')
    } else {
        footerCompany.addClass('footer__list_active');
    }
})

$('.business').on('click', function() {
    const footerCompany = $('.business_list');
    if (footerCompany.hasClass('footer__list_active')) {
        footerCompany.removeClass('footer__list_active')
    } else {
        footerCompany.addClass('footer__list_active');
    }
})
$('.support').on('click', function() {
    const footerCompany = $('.support_list');
    if (footerCompany.hasClass('footer__list_active')) {
        footerCompany.removeClass('footer__list_active')
    } else {
        footerCompany.addClass('footer__list_active');
    }
})
