$("h1").mouseover(function() {
    $("h1").css("color", "purple");
});

$("input").keypress( function(event) {
    $("h1").text(event.key);
});
