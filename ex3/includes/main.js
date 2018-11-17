$("document").ready(function() {
    var originOpacity;
    var originColor;
    var plus = $("header section");
    plus.click(function() {
        clickBox("main"); 
    });     
});

function clickBox (element) {
    var bottomBox = $("<section>").addClass("newBox").css("opacity", Math.random()).hover(function() {
        originOpacity = $(this).css("opacity");
        originColor = $(this).css("background-color");
        $(this).css({"opacity": "1", "background-color": "#ffffff"});
    }, function() {
        $(this).css({"opacity": originOpacity, "background-color": originColor});
    });
    $(element).append(bottomBox);
}