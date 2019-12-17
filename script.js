$(document)
    .ready(function() {
        // fix menu when passed
        $('.masthead')
            .visibility({
            once: false,
            onBottomPassed: function() {
                $('.fixed.menu').transition('fade in');
            },
            onBottomPassedReverse: function() {
                $('.fixed.menu').transition('fade out');
                $('.active').removeClass('active')
                $('.menu-home').addClass('active')
            },
            onTopPassed: function() {
                // top of element passed
                $('.active').removeClass('active')
                $('.menu-home').addClass('active')
            },
            })
        ;
        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;
        $('#about')
            .visibility({
                once: false,
                onTopPassed: function() {
                // top of element passed
                    $('.active').removeClass('active')
                    $('.menu-about').addClass('active')
                },
                onBottomPassedReverse: function() {
                // top of element passed
                    $('.active').removeClass('active')
                    $('.menu-about').addClass('active')
                },
            })
        ;
        $('#experience')
            .visibility({
                once: false,
                onTopPassed: function() {
                // top of element passed
                    $('.active').removeClass('active')
                    $('.menu-experience').addClass('active')
                },
                onBottomPassedReverse: function() {
                // top of element passed
                    $('.active').removeClass('active')
                    $('.menu-experience').addClass('active')
                },
            })
        ;
        $('#skills')
            .visibility({
                once: false,
                onTopPassed: function() {
                // top of element passed
                    $('.active').removeClass('active')
                    $('.menu-skills').addClass('active')
                },
                onBottomPassedReverse: function() {
                // top of element passed
                    $('.active').removeClass('active')
                    $('.menu-skills').addClass('active')
                },
            })
        ;
        $('#projects')
            .visibility({
                once: false,
                onTopPassed: function() {
                // top of element passed
                    $('.active').removeClass('active')
                    $('.menu-projects').addClass('active')
                },
                onBottomPassedReverse: function() {
                // top of element passed
                    $('.active').removeClass('active')
                    $('.menu-projects').addClass('active')
                },
            })
        ;
    })
;