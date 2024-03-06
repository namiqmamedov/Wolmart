var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

var Swipes = new Swiper('.service-box', {
    loop: true,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 20,
    // breakpoints: {
    //     1920: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     },
    //     1028: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //     },
    //     480: {
    //         slidesPerView: 1,
    //         spaceBetween: 10
    //     }
    // },
});

var Swipes = new Swiper('.deal-wrapper', {
    loop: false,
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 20,
    // breakpoints: {
    //     1920: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     },
    //     1028: {
    //         slidesPerView: 2,
    //         spaceBetween: 30
    //     },
    //     480: {
    //         slidesPerView: 1,
    //         spaceBetween: 10
    //     }
    // },
});