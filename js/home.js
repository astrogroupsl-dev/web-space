$(document).ready(function() {
    $("#scrollButton").click(function() {
        $('html, body').animate({
            scrollTop: $("footer").offset().top
        }, 1000); // Adjust the duration of scrolling (in milliseconds)
    });
});

