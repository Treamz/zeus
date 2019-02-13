(function ($) {
    "use strict";

    $(window).on('load', function() {
        function changeBgCollor(){
            $('.logo-animation-block').removeClass('logo-animation-block--bg');
        }
        setTimeout(changeBgCollor, 2000);
    });

    /*-------------------------------------------
        Animato logo on first block home page
    --------------------------------------------*/
    TweenLite.set(".letter", {autoAlpha:0, scale:3, transformOrigin: "1px 1px 0px"});

    var loaderBG = new TimelineMax().to('.animate-bgColor', 1.5, {autoAlpha:0});

    var tl = new TimelineLite();

    tl.to(".animate-bgColor", 1.5, {autoAlpha:0})
        .staggerTo('.letter', .2, {autoAlpha:1, scale:1, transformOrigin: "1px 1px 0px"}, 0.05)
        .to(".logo", 1, {autoAlpha:1})
        .staggerTo('.letter', .2, {autoAlpha:0, scale:1, transformOrigin: "1px 1px 0px"}, 0.03)
        .to(".name", .5, {autoAlpha:1, y:0}, "-=0.15")
        .to(".logo-animation-block__text", .5, {autoAlpha:1}, "-=0.15");



    //начинаем анимацию, если курсор на первом блоке
    $(".hide.logo").on('mouseenter',function() {
        $(this).addClass('glitch-ready');
        $('.glitch-ready').addClass('glitch-logo');
        $('.logo-animation-block').addClass('logo-animation-block--glitch');
    });
    $(".hide.logo").on('mouseleave',function() {
        $('.glitch-ready').removeClass('glitch-logo');
        $('.logo-animation-block').removeClass('logo-animation-block--glitch');
        $(this).removeClass('glitch-ready');
    });


    /*--------------------------------------------
                   Burger menu
    *------------------------------------------*/
    var topMenuBurger = $('.menu-icon');
    topMenuBurger.on('click', function() {
        $('.top-menu').toggleClass('burger');
    });
    $(window).on('resize', function() {
        if ( $(this).width() > 980 && $('.top-menu').hasClass('burger') ) {
            $('.top-menu').removeClass('burger');
        }
    });

    /*-------------------------------------------------------------
            анимация с фиксированой прокруткой
    -------------------------------------------------------------*/
    // init controller
    var controller = new ScrollMagic.Controller();

    if (window.innerWidth > 1366 ) {
        var pinScene1 = new ScrollMagic.Scene({
            triggerElement: '.logo-animation-block',
            triggerHook: 0
        })
            .setPin('.logo-animation-block', {pushFollowers: false})
            .addTo(controller);

        var pinScene2 = new ScrollMagic.Scene({
            triggerElement: '.mockup-services--1',
            triggerHook: 0
        })
            .setPin('.mockup-services--1 .h-block__content')
            .addTo(controller);

        var pinScene3 = new ScrollMagic.Scene({
            triggerElement: '.mockup-services--1',
            triggerHook: 0
        })
            .setPin('.mockup-services--2 .h-block__content')
            .addTo(controller);
    }

    /*-------------------------------------------------------------
                    анимация в блоке консультации
    -------------------------------------------------------------*/
    //с фоновыми полосками
    $('.consultation-block__animation-background-item').each(function(){
        // create a scene
        var bgConsultationScene1 = new ScrollMagic.Scene({
            triggerElement: '.start-line-animation',
            triggerHook: 0.8,
            reverse: false
        })
            .setClassToggle(this, "bg-line")
            .addTo(controller);
    });
    //Показываем название блока после анимации полосок
    var consultationScene1 = new ScrollMagic.Scene({
        triggerElement: '.start-line-animation', // с этого блока начнеться анимация
        //duration: "40%", // через сколько проиграть анимаци обратно - скрыть элемент
        triggerHook: 0.8, // отметка начала анимации - если поднять вышее нее, то возвращает в положение до анимации, если только не включить reverse
        reverse: false // анимация играет только 1 раз, надо удалить свойство duration
    })
        .setClassToggle('.consultation-block__container', 'fade-in-down')	// добавляем класс, когда блок с id в зоне видимости
        //.addIndicators() // добавляет отметки при пересичении которых начинаеться анимация начала анимации
        .addTo(controller);

    /*-------------------------------------------------------------
        Убираем фиксированое позиционирование у первого блока
        при прокрутке, что бы сделать фиксированый футер
    -------------------------------------------------------------*/
    if (window.innerWidth > 1366 ) {
        var consultationScene2 = new ScrollMagic.Scene({
            triggerElement: '.mockup-services--2',
            triggerHook: 0.5
            // reverse: false
        })
            .setClassToggle('.logo-animation-block', 'fixed')
            .addTo(controller);
    }


    /*-------------------------------------------
           Изменяем цвета фонов при скроле
    --------------------------------------------*/
    if (window.innerWidth > 1366 ) {
        var setBgColorScene1 = new ScrollMagic.Scene({
                triggerElement: '.mockup-services--1',
                triggerHook: 0.15
            })
                .setClassToggle('.logo-animation-block', 'bg_color-fiolet')
                .addTo(controller)
        ;
        var setBgColorScene2 = new ScrollMagic.Scene({
                triggerElement: '.mockup-services--2',
                triggerHook: 0.15
            })
                .setClassToggle('.mockup-services--1', 'bg_color-green')
                .addTo(controller)
        ;
        var setBgColorScene3 = new ScrollMagic.Scene({
                triggerElement: '.services-items',
                triggerHook: 0.15
            })
                .setClassToggle('.mockup-services--2', 'bg_color-black')
                .addTo(controller)
        ;
        var setBgColorScene4 = new ScrollMagic.Scene({
                triggerElement: '.services-items',
                triggerHook: 0.15
            })
                .setClassToggle('.top-menu', 'bg_color-menu-black')
                // .addIndicators()
                .addTo(controller)
        ;
    }


    /*-------------------------------------------
                Services block
    --------------------------------------------*/
    if (window.innerWidth > 1366 ) {
        var servicesScene_1 = new ScrollMagic.Scene({
                triggerElement: '.services-items',
                triggerHook: 0.15,
                reverse: false
            })
                .setClassToggle('.services-item__center-mobile', 'services-item__center-mobile--visible')
                .addTo(controller)
        ;
        var servicesScene_2 = new ScrollMagic.Scene({
                triggerElement: '.services-items',
                triggerHook: 0.15
            })
                .setClassToggle('.pulse', 'pulse--animation')
                .addTo(controller)
        ;
        var servicesScene_3 = new ScrollMagic.Scene({
                triggerElement: '.services-items',
                triggerHook: 0.15
            })
                .setClassToggle('.services-item__icon', 'services-item__icon--visible')
                .addTo(controller)
        ;
        var servicesScene_4 = new ScrollMagic.Scene({
                triggerElement: '.services-items',
                triggerHook: 0.15
            })
                .setClassToggle('.services-item__title', 'services-item__title--visible')
                .addTo(controller)
        ;

        /*icons on services block*/
        $('.ui-ux-design').on('mouseenter', function() {
            var tl = new TimelineLite();
            tl.from(".ruler", .3, {x:54+'px', y:172+'px'})
            tl.from(".match", .3, {y:184+'px'})
            tl.from(".pansil", .3, {y:184+'px'});
        });

        $('.ui-ux-design').on('mouseleave', function() {
            var tl = new TimelineLite();
            tl.to(".ruler", .001, {x:0, y:0})
            tl.to(".match", .001, {y:0})
            tl.to(".pansil", .001, {y:0});
        });

        $('.artificial-intelligence-svg').on('mouseenter', function() {
            var tl = new TimelineLite();
            tl.staggerTo('.a-i_circle', .5, {'fill':'#fff'}, .05);
        });
        $('.artificial-intelligence-svg').on('mouseleave', function() {
            var tl = new TimelineLite();
            tl.staggerTo('.a-i_circle', .5, {'fill':'#000'}, .05);
        });

        $('.development_svg').on('mouseenter', function() {
            TweenLite.set(".hiden-svg", {autoAlpha:0}); //задаем параметр который будем анимировать, если использовать tl.for, то будет ужасно лагать
            var tl = new TimelineLite();
            tl.to('.development_svg-desktop', 0.2, {autoAlpha:1}, "+=0.2" )
            tl.to('.development__svg-big-arrow', 0.2, {autoAlpha:1})
            tl.to('.development_svg-tablet', 0.2, {autoAlpha:1})
            tl.to('.development__svg-small-arrow', 0.2, {autoAlpha:1})
            tl.to('.development_svg-mobile', 0.2, {autoAlpha:1});
        });
    }


    /* animation background on Trust Us block*/
    if (window.innerWidth > 1366 ) {
        (function(){
            var x;
            var y;
            var x2;
            var y2;
            var l = -parseInt($('.parallax-bg').width() - $('.clients-block').width()) / 40;
            var t = -parseInt($('.parallax-bg').height() - $('.clients-block').height()) / 40;
            $('.parallax-bg').css('transform', 'translateX(' + (l / 50) + 'px)' + ' translateY(' + (t / 50) + 'px)');
            $('.clients-block').mouseenter(function (e) {
                var x = e.pageX;
                var y = e.pageY;
                $('.clients-block').mousemove(function (b, d) {
                    var x2 = b.pageX;
                    var y2 = b.pageY;
                    var p = x2-x;
                    var d = y2-y;
                    var tl = new TimelineLite();
                    tl.to('.parallax-bg', 1.5, {x: l - p / 50, y: t - d / 50});
                });
            });
        })();

        /* animation onScroll on Trust Us block*/
        var weTrustScene1 = new ScrollMagic.Scene({
            triggerElement: '.clients-block',
            triggerHook: 0.5
            // reverse: false
        })
            .setClassToggle('.separate-word', 'animation-on-scroll')
            // .addIndicators()
            .addTo(controller);

        var weTrustScene2 = new ScrollMagic.Scene({
            triggerElement: '.clients-block',
            triggerHook: 0.5
            // reverse: false
        })
            .setClassToggle('.clients-block__clients-logo', 'animation-on-scroll')
            .addTo(controller);

    }

    /* START animation label in contact form */
    (function() {
        $('.contact__input').on('focus',function() {
            if( $(this).hasClass('label-up') || $(this).hasClass('label-up-static') || $(this).val() !== "" ) {
                return;
            } else {
                $(this).addClass('label-up');
            }
        });

        $('#name').on('change',function() {
            if ( $(this).val() !== "") {
                $(this).removeClass('label-down').removeClass('label-up').addClass("label-up-static");
            } else {
                $(this).addClass('label-up').addClass('label-down').removeClass("label-up-static");
            }
        });

        $('#email').on('change',function() {
            if ( $(this).val() !== "") {
                $(this).removeClass('label-down').removeClass('label-up').addClass("label-up-static");
            } else {
                $(this).addClass('label-up').addClass('label-down').removeClass("label-up-static");
            }
        });

        $('#tel').on('change',function() {
            if ( $(this).val() !== "") {
                $(this).removeClass('label-down').removeClass('label-up').addClass("label-up-static");
            } else {
                $(this).addClass('label-up').addClass('label-down').removeClass("label-up-static");
            }
        });

        $('#message').on('change',function() {
            if ( $(this).val() !== "") {
                $(this).removeClass('label-down').removeClass('label-up').addClass("label-up-static");
            } else {
                $(this).addClass('label-up').addClass('label-down').removeClass("label-up-static");
            }
        });

        //клик по лейблу
        $('.label-select').on('click', function() {
            $('.select-field').addClass('select-field--bottom-border');
            $('.fake-select').addClass('fake-select--active');
            $(this).addClass('label-select-up').removeClass('label-select-down');
        });

        // клик по результату выбора, когда лейба сверху и можно по результату кликнуть
        $('.select-result').on('click', function() {
            $('.fake-select').addClass('fake-select--active');
            $('.label-select').addClass('label-select-up');
            $('.select-field').addClass('select-field--bottom-border');
        });

        //имитация выбора, при клике записывает результат в фейковый инпет дл ярезультата
        $('.fake-select__option').on('click', function() {
            var result = $(this).html();
            $('.select-result').html(result);
            $('.fake-select').removeClass('fake-select--active');
            $('.select-field').removeClass('select-field--bottom-border');
            //передаем значение кастомного селекта в реальный
            var valSelect = $(this).data('value');
            $('.select').val(valSelect);
        });

        // вычисляем клик вне селекта
        $(document).on('mouseup', function (e){ // событие клика по веб-документу
            var select = $(".select-field"); // тут указываем ID элемента
            if (!select.is(e.target) // если клик был не по нашему блоку
                && select.has(e.target).length === 0) { // и не по его дочерним элементам
                if ( $('.select-result').html() === '' && $('.label-select').hasClass('label-select-up') ) {
                    $('.label-select').addClass('label-select-down');
                }
                $('.select-field').removeClass('select-field--bottom-border');
                $('.fake-select').removeClass('fake-select--active');
            }
        });
    })();
    /* END animation label in contact form */

    /* START init slider on page single case*/
    (function() {
        if($('body').hasClass('single-case')) {
            $('.case-single__slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                nextArrow: '<div class="arrow-right"></div>',
                prevArrow: '<div class="arrow-left"></div>',
                infinite: true,
                draggable: true,
                dots: true
            });

            $(".case-single__icon").on("click", function(e) {
                var id = $(this).data("slider");
                var top = $(id).offset().top;
                $('body,html').animate({scrollTop: top - 150}, 1500);
            });
        }
    })();
    /* END init slider on page single case*/

    //Появление постов по очереди при прокрутке
    (function() {
        if($('body').hasClass('blog')) {
            //первая линия постов
            var showArticle1 = new ScrollMagic.Scene({
                triggerElement: '.show--1',
                triggerHook: 0.8,
                reverse: false
            })
                .setClassToggle('.show--1', 'showArticle')
                .addTo(controller);

            // вторая линия постов
            var showArticle2 = new ScrollMagic.Scene({
                triggerElement: '.show--2',
                triggerHook: 0.8,
                reverse: false
            })
                .setClassToggle('.show--2', 'showArticle')
                .addTo(controller);

            // третья линия постов
            var showArticle3 = new ScrollMagic.Scene({
                triggerElement: '.show--3',
                triggerHook: 0.8,
                reverse: false
            })
                .setClassToggle('.show--3', 'showArticle')
                .addTo(controller);
        }
    })();

    //появление постов на странице категории при прокрутке
    $('.category-article').each(function(){
        var showArticleCategory = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
            .setClassToggle(this, "showArticle")
            .addTo(controller);
    });
    $('.category-subtitle').each(function(){
        var showCategorySubtitle = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
            .setClassToggle(this, "showArticle")
            .addTo(controller);
    });

    // анимация на странице категорий в самом низу с кругом по скролу (блок екшена)
    var tween = new TimelineMax()
        .to('.big-circle-svg', 2.5, {'stroke-dasharray': '4255', 'stroke-dashoffset': '2175'})
        .to('.small-circle-svg--top', .25, {autoAlpha:1}, '-=2.5')
        .to('.custom-softwere', .25, {autoAlpha:1}, '-=1.75')
        .to('.small-circle-svg--right', .25, {autoAlpha:1}, '-=1.5')
        .to('.own-website', .25, {autoAlpha:1}, '-=1.25')
        .to('.small-circle-svg--bottom', .25, {autoAlpha:1}, '-=1')
        .to('.mobile-app-develop', .25, {autoAlpha:1}, '-=0.75')
        .to('.small-circle-svg--left', .25, {autoAlpha:1}, '-=0.5')
        .to('.software-develop', .25, {autoAlpha:1}, '-=0.25');

    var scene = new ScrollMagic.Scene({
        triggerElement: '.action-block',
        triggerHook: 0.05
    })
        .setTween(tween)
        .addTo(controller);


    //Анимация "Пятнашек" на странице "О компании"
    $('.technologies-name').on('click', function() {
        var current = $(this).index();
        var active = $('.technologies-name.active').index();


        //Если жмем на ПЕРВУЮ пятнашку
        if ((current === 0) && (active === 7)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(7), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(1), 0.2, {x: "100%"});
            })();
        } else if ((current === 0) && (active === 6)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(1), 0.2, {x: "100%"});
            })();
        } else if ((current === 0) && (active === 3)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(1), 0.2, {x: "100%"});
            })();
        } else if ((current === 0) && (active === 4)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(1), 0.2, {x: "100%"});
            })();
        } else if ((current === 0) && (active === 5)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(1), 0.2, {x: "100%"});
            })();
        } else if ((current === 0) && (active === 2)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(1), 0.2, {x: "100%"});
            })();
        } else if ((current === 0) && (active === 1)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(1), 0.2, {x: "100%"});
            })();
        }


        //Если жмем на ВТОРУЮ пятнашку
        if ((current === 1) && (active === 0)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(1), 0.2, {x: "0%"});
            })();
        } else if ((current === 1) && (active === 7)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(7), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"});
            })();
        } else if ((current === 1) && (active === 6)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"});
            })();
        } else if ((current === 1) && (active === 3)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"});
            })();
        } else if ((current === 1) && (active === 4)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"});
            })();
        } else if ((current === 1) && (active === 5)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(5), 0.2, {x: "-100%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"});
            })();
        } else if ((current === 1) && (active === 2)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(2), 0.2, {y: "100%"});
            })();
        }


        //Если жмем на ТРЕТЬЮ пятнашку
        if ((current === 2) && (active === 0)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(1), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"});
            })();
        } else if ( (current === 2) && (active === 1) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"});
            })();
        } else if ( (current === 2) && (active === 7) ) {
            (function() {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(7), 0.2, {x:"100%"})
                    .to($('.technologies-name').eq(6), 0.2, {x:"100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y:"100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x:"-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x:"-100%"});
            })();
        } else if ( (current === 2) && (active === 6) ) {
            (function() {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(6), 0.2, {x:"100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y:"100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x:"-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x:"-100%"});
            })();
        } else if ( (current === 2) && (active === 3) ) {
            (function() {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {y:"100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x:"-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x:"-100%"});
            })();
        } else if ( (current === 2) && (active === 4) ) {
            (function() {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(4), 0.2, {x:"-100%"})
                    .to($('.technologies-name').eq(5), 0.2, {x:"-100%"});
            })();
        } else if ( (current === 2) && (active === 5) ) {
            (function() {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(5), 0.2, {x:"-100%"});
            })();
        }


        //Если жмем на ШЕСТУЮ пятнашку
        if ((current === 5) && (active === 7)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(7), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"});
            })();
        } else if ((current === 5) && (active === 6)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"});
            })();
        } else if ((current === 5) && (active === 3)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"});
            })();
        } else if ((current === 5) && (active === 4)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(4), 0.2, {x: "-100%"});
            })();
        } else if ((current === 5) && (active === 0)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(1), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"});
            })();
        } else if ((current === 5) && (active === 1)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"});
            })();
        } else if ((current === 5) && (active === 2)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"});
            })();
        } else if ((current === 5) && (active === 3)) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"});
            })();
        }


        //Если жмем на ПЯТУЮ пятнашку
        if ( (current === 4) && (active === 7) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(7), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"});
            })();
        } else if ( (current === 4) && (active === 6) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"});
            })();
        } else if ( (current === 4) && (active === 3) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {y: "100%"});
            })();
        } else if ( (current === 4) && (active === 0) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(1), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"});
            })();
        } else if ( (current === 4) && (active === 1) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"});
            })();
        } else if ( (current === 4) && (active === 2) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"});
            })();
        } else if ( (current === 4) && (active === 5) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"});
            })();
        }


        //Если жмем на ЧЕТВЕРТУЮ пятнашку
        if ( (current === 3) && (active === 7) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(7), 0.2, {x: "100%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"});
            })();
        } else  if ( (current === 3) && (active === 6) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(6), 0.2, {x: "100%"});
            })();
        } else  if ( (current === 3) && (active === 0) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(1), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"});
            })();
        } else  if ( (current === 3) && (active === 1) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"});
            })();
        } else  if ( (current === 3) && (active === 2) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"});
            })();
        } else  if ( (current === 3) && (active === 5) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"});
            })();
        } else  if ( (current === 3) && (active === 4) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"});
            })();
        }


        //Если жмем на СЕДЬМУЮ пятнашку
        if ( (current === 6) && (active === 7) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(7), 0.2, {x: "100%"});
            })();
        } else if ( (current === 6) && (active === 0) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(1), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"});
            })();
        } else if ( (current === 6) && (active === 1) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"});
            })();
        } else if ( (current === 6) && (active === 2) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"});
            })();
        } else if ( (current === 6) && (active === 5) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"});
            })();
        } else if ( (current === 6) && (active === 4) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"});
            })();
        } else if ( (current === 6) && (active === 3) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"});
            })();
        }


        //Если жмем на ВОСЬМУЮ пятнашку
        if ( (current === 7) && (active === 0) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(1), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(7), 0.2, {x: "0%"});
            })();
        } else if ( (current === 7) && (active === 1) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(2), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(7), 0.2, {x: "0%"});
            })();
        } else if ( (current === 7) && (active === 2) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(7), 0.2, {x: "0%"});
            })();
        } else if ( (current === 7) && (active === 5) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(5), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(7), 0.2, {x: "0%"});
            })();
        } else if ( (current === 7) && (active === 4) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(4), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(7), 0.2, {x: "0%"});
            })();
        } else if ( (current === 7) && (active === 3) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(3), 0.2, {y: "0%"})
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(7), 0.2, {x: "0%"});
            })();
        } else if ( (current === 7) && (active === 6) ) {
            (function () {
                var tween = new TimelineMax()
                    .to($('.technologies-name').eq(6), 0.2, {x: "0%"})
                    .to($('.technologies-name').eq(7), 0.2, {x: "0%"});
            })();
        }

        $('.technologies-name').removeClass('active');
        $(this).addClass('active');
    });


    // Анимация привязана к скролу на странице "О компании"
    var onScroll1 = new ScrollMagic.Scene({
        triggerElement: '.up-title-page',
        triggerHook: 0.7
    })
        .setTween('.up-title-page', 1, {autoAlpha:1, y:0})
        .addTo(controller);


    var onScroll2 = new ScrollMagic.Scene({
        triggerElement: '.small-title-page',
        triggerHook: 0.7
    })
        .setTween('.small-title-page', 1, {autoAlpha:1, y:0})
        .addTo(controller);

    var onScroll3 = new ScrollMagic.Scene({
        triggerElement: '.dark-block--right',
        triggerHook: 0.7
    })
        .setTween('.dark-block--right', 1, {autoAlpha:1, x:0})
        .addTo(controller);

    var onScroll4 = new ScrollMagic.Scene({
        triggerElement: '.ceo-ava',
        triggerHook: 0.7
    })
        .setTween('.ceo-ava', 1, {autoAlpha:1, x:0})
        .addTo(controller);

    var onScroll5 = new ScrollMagic.Scene({
        triggerElement: '.about-company__text',
        triggerHook: 0.7
    })
        .setTween('.about-company__text', 1, {autoAlpha:1, x:0})
        .addTo(controller);

    var onScroll6 = new ScrollMagic.Scene({
        triggerElement: '.medals-block',
        triggerHook: 0.7
    })
        .setTween('.medals-block', 1, {autoAlpha:1, x:0})
        .addTo(controller);

    var onScroll7 = new ScrollMagic.Scene({
        triggerElement: '.how-we-work .title-block',
        triggerHook: 0.7
    })
        .setTween('.how-we-work .title-block', 1, {autoAlpha:1, y:0})
        .addTo(controller);


    var tween1 = new TimelineMax()
        .staggerTo('.how-we-work__icon', .5, {autoAlpha:1, scale:1}, 0.2);

    var onScroll8 = new ScrollMagic.Scene({
        triggerElement: '.how-we-work__icon',
        triggerHook: 0.7
    })
        .setTween(tween1)
        .addTo(controller);


    var onScroll9 = new ScrollMagic.Scene({
        triggerElement: '.technologies .title-block',
        triggerHook: 0.7
    })
        .setTween('.technologies .title-block', 1, {autoAlpha:1, y:0})
        .addTo(controller);


    var onScroll10 = new ScrollMagic.Scene({
        triggerElement: '.barley-break',
        triggerHook: 0.7
    })
        .setTween('.barley-break', 1, {autoAlpha:1, y:0})
        .addTo(controller);


    var onScroll11 = new ScrollMagic.Scene({
        triggerElement: '.business-areas .title-block',
        triggerHook: 0.7
    })
        .setTween('.business-areas .title-block', 1, {autoAlpha:1, y:0})
        .addTo(controller);


    var tween2 = new TimelineMax()
        .staggerTo('.area', .5, {autoAlpha:1, y:1}, 0.2);

    var onScroll12 = new ScrollMagic.Scene({
        triggerElement: '.area-items',
        triggerHook: 0.7
    })
        .setTween(tween2)
        .addTo(controller);


    var onScroll13 = new ScrollMagic.Scene({
        triggerElement: '.we-in-numbers .title-block',
        triggerHook: 0.7
    })
        .setTween('.we-in-numbers .title-block', 1, {autoAlpha:1, x:0})
        .addTo(controller);

    var onScroll14 = new ScrollMagic.Scene({
        triggerElement: '.we-in-numbers__text',
        triggerHook: 0.7
    })
        .setTween('.we-in-numbers__text', 1, {autoAlpha:1, y:0})
        .addTo(controller);


    var tween3 = new TimelineMax()
        .staggerTo('.we-in-numbers__title-numbers', .5, {autoAlpha:1}, 0.2);

    var onScroll15 = new ScrollMagic.Scene({
        triggerElement: '.we-in-numbers__title-numbers',
        triggerHook: 0.7
    })
        .setTween(tween3)
        .addTo(controller);


    var onScroll16 = new ScrollMagic.Scene({
        triggerElement: '.consultation .title-block',
        triggerHook: 0.7
    })
        .setTween('.consultation .title-block', 1, {autoAlpha:1, y:0})
        .addTo(controller);


    var onScroll17 = new ScrollMagic.Scene({
        triggerElement: '.consultation .consultation-form',
        triggerHook: 0.7
    })
        .setTween('.consultation .consultation-form', 1, {autoAlpha:1, y:0})
        .addTo(controller);


    // Счетчик
    (function(){
        if( $('.projects-in-numbers').length >= 1 ) {

            var show = true;
            var countbox = ".we-in-numbers .title-block";
            $(window).on("scroll load resize", function(){
                if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
                var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
                var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
                var w_height = $(window).height();        // Высота окна браузера
                var d_height = $(document).height();      // Высота всего документа
                var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
                if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
                    //имитирование счетчика
                    $('.projects-in-numbers').animate({ num: 738 }, {
                        duration: 3000,
                        step: function (num){
                            this.innerHTML = Math.ceil(num)
                        }
                    });

                    $('.clients-in-numbers').animate({ num: 59 }, {
                        duration: 3000,
                        step: function (num){
                            this.innerHTML = Math.ceil(num)
                        }
                    });

                    $('.code-in-numbers').animate({ num: 3789 }, {
                        duration: 3000,
                        step: function (num){
                            this.innerHTML = Math.ceil(num)
                        }
                    });

                    $('.coffee-in-numbers').animate({ num: 39 }, {
                        duration: 3000,
                        step: function (num){
                            this.innerHTML = Math.ceil(num)
                        }
                    });
                    show = false;
                }
            });
        }
    })();

    /*___________________________________________________________________________*/


}(jQuery));
