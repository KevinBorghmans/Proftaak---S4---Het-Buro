$(document).ready(function(){
    
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
        $('.fullscreen-menu').toggleClass('open2'); 
	});
    
     $(".de-text").delay(500).css({'opacity':'0','padding-top':'155px'}).animate({'opacity':'1','padding-top':'55px'}, 1500);

    
   $(".main-text").hover(function () {
        $("body").toggleClass("background1");
    });
    
     $(".main-text-2").hover(function () {
        $("body").toggleClass("background2");
    });

    $(".main-text-3").hover(function () {
        $("body").toggleClass("background3");
    });
    
});