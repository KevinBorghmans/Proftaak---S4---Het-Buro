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