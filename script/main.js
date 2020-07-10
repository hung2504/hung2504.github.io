$(function() {
    //User Trict
    "user strict";
    /*Preloader animsition*/
    $(window).on('load', function () {
        $('.page-loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    /*Navigation control*/
    var hamburgerAnimation = $(".hamburger.has-animation");
    var hamburgerNoAnimation = $(".hamburger");
    var navbar = $('.nav-right');
    var navbarVertical = $('.navbar-vertical .navbar-main');
    var navbarV3 = $('.navbar-center .navbar-menu');
    hamburgerAnimation.on("click", function () {
        hamburgerAnimation.toggleClass("is-active");
    });
    hamburgerNoAnimation.on("click", function () {
        navbar.toggleClass('opened');
        navbarV3.toggleClass('opened');
        navbarVertical.toggleClass('opened');
    });

    // Navbar menu caret
    $('.dropdown i').on('click', function (e) {
        $(this).siblings('.dropdown-menu').toggleClass('open');
        $(this).toggleClass('fa-rotate-180');
        e.stopPropagation();
    });

    /*Mini shop cart*/
    var miniCart = $('.mini-cart');
    $('.u-shop-cart .ic-cart').on('click', function () {
        miniCart.toggleClass('opened');
    });
    $(window).on('click', function (event) {
        if (!$(event.target).closest(miniCart).length && !$(event.target).closest('.u-shop-cart .ic-cart').length) {
            miniCart.removeClass('opened');
        }
    });

    /*Mini setting*/
    var miniSetting = $('.mini-setting');
    $('.ic-enjoy').on('click', function () {
        miniSetting.toggleClass('opened');
    });
    $(window).on('click', function (event) {
        if (!$(event.target).closest(miniSetting).length && !$(event.target).closest('.ic-enjoy').length) {
            miniSetting.removeClass('opened');
        }
    });

    // BUTTON SEARCH
    $('.ic-search').on('click', function () {
        $('.search').toggle(500);
    });

    // Slined Home 01 - Home_service -Banner
    $('#Home-service').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [800, 700, 600, 500],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: false
            },
            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });

    // Slined Home 01 - Home_service - content
    $('#slide-home-service').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [500, 500, 500, 500],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: true,
                hide_under: 767
            },
            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 768,
                style: "hermes",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
            }
        }
    });

    // Slined Home 02 - Home_stote - Banner
    $('#slide-home-stote').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [800, 700, 600, 500],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: true,
                hide_under: 767
            },

            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });

    // Slined Home 03 - Home_portfolio - Banner
    $('#slide-home-portfolio').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [800, 700, 600, 500],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: true,
                hide_under: 767
            },

            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });

    //ACCORDION
    $('.collapse01').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");

    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
    });

    // trademark-list
    $('.trademark-list').owlCarousel({
        autoplay: true,
        loop: true,
        // margin:100,
        // nav:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            480: {
                items: 3,
                nav: true
            },
            768: {
                items: 4,
                nav: false
            },
            992: {
                items: 8,
                nav: true,
                loop: false
            }
        }

    });

    //  Home_stote_V2 - Banner
    $('#slide-home-stoteV2').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [550, 550, 550, 550],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: true,
                hide_under: 767
            },

            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 768,
                style: "hermes",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
            }
        }
    });

    // Slined-home-portfolioV2
    $('#slide-home-portfolioV2').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [500, 500, 400, 400],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {

            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: true,
                hide_under: 767
            },

            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 768,
                style: "hermes",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
            }
        }
    });

    // slide-home-stoteV3
    $('#slide-home-stoteV3').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [500, 500, 400, 400],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {

            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: true,
                hide_under: 767
            },

            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 768,
                style: "hermes",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
            }

        }
    });

    // GAYLLERY GIRD
    function maso() {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            // columnWidth: '.grid-sizer',
            percentPosition: true,
            layoutMode: 'fitRows',
            fitRows: {
                // gutter: 10,
                gutter: '.gutter-sizer'
            }
        });
    }
    var $Gird = $('.gallery-masonry-gird').isotope({
        itemSelector: '.grid-item',

    });
    $('.filters-button-group').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $Gird.isotope({
            filter: filterValue
        });
        return false;
    });
    maso();

    // categories li active sidebar
    $(".filters-button-group li").on('click', function () {
        $(".filters-button-group li").removeClass("active");
        $(this).addClass("active");
    });

    // GAYLLERY GIRDV2-HOME_Service_V2
    function mason() {
        $('.gridV2').isotope({
            itemSelector: '.grid-itemV2',
            // columnWidth: '.grid-sizerV2',
            percentPosition: true,
            layoutMode: 'fitRows',
            fitRows: {
                // gutter: 10,
                gutter: '.gutter-sizerV2'
            }
        });
    }
    var $GirdV2 = $('.gallery-masonry-girdV2').isotope({
        itemSelector: '.grid-itemV2',

    });
    $('.filters-button-groupV2').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $GirdV2.isotope({
            filter: filterValue
        });
        return false;
    });
    mason();

    // categories li active sidebarV2
    $(".filters-button-groupV2 li").on('click', function() {
        $(".filters-button-groupV2 li").removeClass("active");
        $(this).addClass("active");
    });


    // Slined Home 03 - Home_serviceV2 - Banner
    $('#slide-home-serviceV2').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [800, 700, 600, 500],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onleave: true,
                hide_under: 767
            },

            bullets: {
                enable: false,
                style: 'hermes',
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });

    // slide-home-stoteV3
    $('#home-serviceV2').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth: [1240, 1024, 768, 600],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: 'auto',
        gridheight: [500, 500, 500, 500],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {

            onHoverStop: "off",
            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: true,
                hide_under: 767
            },

            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 768,
                style: "hermes",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
            }

        }
    });

    // trademark-listV2
    $('.trademark-listV2').owlCarousel({
        autoplay: true,
        loop: true,
        // margin:100,
        // nav:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            480: {
                items: 3,
                nav: true
            },
            768: {
                items: 4,
                nav: false
            },
            992: {
                items: 7,
                nav: true,
                loop: false
            }
        }
    });

    // Download file 
    $("#fileRequest").on('click', function () {
        window.location = 'file.doc';
    });

    // TIME
    function makeTimer() {

        var endTime = new Date("September 10, 2017 18:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;

        var now = new Date();
        var now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days + "<div class='timer-desc'>Days</div>");
        $("#hours").html(hours + "<div class='timer-desc'>Hours</div>");
        $("#minutes").html(minutes + "<div class='timer-desc'>Minutes</div>");
        $("#seconds").html(seconds + "<div class='timer-desc'>Seconds</div>");

    }

    setInterval(function () {
        makeTimer();
    }, 1000);

    // quantity
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            var newVal;
            if (oldValue >= max) {
                newVal = oldValue;
            } else {
                newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            var newVal;
            if (oldValue <= min) {
                newVal = oldValue;
            } else {
                newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    
    // accordion-watering
    $('.collapse02').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");

    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });
    // clientSay
    $('.clientSay-box').owlCarousel({
            autoplay:true,
            loop:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                320:{
                    items:1,
                    nav:true
                },
                768:{
                    items:2,
                    nav:false
                }
            }

        });
     // Back to top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() != 0) {
          $('#bttop').fadeIn();
        } else {
          $('#bttop').fadeOut();
        }
    });

    $('#bttop').on('click', function() {
         $('body,html').animate({
            scrollTop: 0
         }, 800);
    });

    // slide button filter
    $(document).ready(function(){
        $("button.filter").on('click', function(){
            $("div.box-filter").toggle(500);

        });
    });
    // BUTTON SEARCHV2
    $(function () {
         $('.fa-search').stop().click( function(){
            $check = $(".searchV2");
            if($check.hasClass("add-transitions"))
            {
                $check.removeClass("add-transitions");
            }
            else 
            {
                $check.addClass("add-transitions");
            }
        })
    });


     
});