document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("scrollButton").addEventListener("click", function () {
        var contentHead = document.querySelector(".content-head");
        var topPos = contentHead.offsetTop;
        window.scrollTo({
            top: topPos,
            behavior: "smooth"
        });
    });
});
