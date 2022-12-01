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
        navText: ['<i class="fa fa-angle-left round-btn">prev</i>', '<i class="fa fa-angle-right round-btn">next</i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    })
    // end of banner slider

})