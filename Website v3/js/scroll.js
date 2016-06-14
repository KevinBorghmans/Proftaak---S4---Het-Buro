var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement:'#trigger1'
}).setClassToggle(".timelineSvg", "show")
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement:'#trigger2'
}).setClassToggle(".timelineSvg2", "show")
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement:'#trigger3'
}).setClassToggle(".timelineSvg3", "show")
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement:'#trigger4'
}).setClassToggle(".timelineSvg4", "show")
.addTo(controller);

scene2.on("enter", function (event) {
   
    $('.km2').each(function () {
         $('.km').hide().fadeIn(1000);
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});

scene3.on("enter", function (event) {
    $('.km3').each(function () {
    $(this).prop('Counter',1000).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});

scene4.on("enter", function (event) {
    $('.km4').each(function () {
    $(this).prop('Counter',2000).animate({
        Counter: $(this).text()
    }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});