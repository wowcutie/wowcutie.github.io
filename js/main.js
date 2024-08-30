$(document).ready(function(){
    // nav toggle
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    });

    $(".header nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    });

    // Fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    });

    // Popup
    $('#popup').show();
        $('#playButton').click(function() {
          $('#popup').hide();
          $('#myAudio')[0].play();
    });

    $.scrollIt();
    
})