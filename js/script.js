jQuery(function( $ ){
    /**
     * banner slider 
     */ 
    $('.banner-slider').owlCarousel({
        loop    :true,
        nav     :true,
        items   : 1,
        autoplay: true,
        autoplayHoverPause: true,
        nav:true,
        dots:false,
        navContainerClass:"banner__nav",
        navClass:['banner__nav__prev-btn','banner__nav__next-btn'],
        center:true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    })
    // end of banner slider

})


$('.counter').counterUp({
    delay: 10,
    time: 1000
});