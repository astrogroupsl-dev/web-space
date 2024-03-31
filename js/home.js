$(document).ready(function() {
    $("#scrollButton").click(function() {
        $('html, body').animate({
            scrollTop: $(".content-head").offset().top
        }, 1000); 
    });
});

