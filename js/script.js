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
    $('.counter').counterUp({
        delay: 30,
        time: 1500
    });

    $.fn.animateNumbers = function(stop, commas, duration, ease) {
        return this.each(function() {
            var $this = $(this);
            var start = parseInt($this.text().replace(/,/g, ""), 10);
            commas = (commas === undefined) ? true : commas;
            $({
                value: start
            }).animate({
                value: stop
            }, {
                duration: duration == undefined ? 500 : duration,
                easing: ease == undefined ? "swing" : ease,
                step: function() {
                    $this.text(Math.floor(this.value));
                    if (commas) {
                        $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }
                },
                complete: function() {
                    if (parseInt($this.text(), 10) !== stop) {
                        $this.text(stop);
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    }
                }
            });
        });
    }
     
     
    let number_percentage = $(".number-percentage");
     
    function animateProgressBar() {
        number_percentage.each(function() {
            $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
            var value = $(this).attr("data-value");
            var duration = $(this).attr("data-animation-duration");
            $(this).closest('.xs-skill-bar').find('.xs-skill-track').animate({
                width: value + '%'
            }, 4500);
        });
    }
     
    if ($('.waypoint-tigger').length > 0) {
        var waypoint = new Waypoint({
            element: document.getElementsByClassName('waypoint-tigger'),
            handler: function(direction) {
                animateProgressBar();
            }
        });
    }

})
