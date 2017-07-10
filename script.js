var x = document.getElementById("width");
var y = document.getElementById("height");

$( document ).ready(function() {
    /* Once page has loaded */
    alert('jQuery is functioning properly')
    /* Activates and highlights pixels when moused over*/
    $( '.pixel' ).mouseenter(function(){
        $(this).fadeTo(0, 1);
        $(this).css('background-color', 'rgb(70,70,70)');
    });
    /* Returns unhighlighted pixels to black */
    $( '.pixel' ).mouseleave(function(){
        $(this).css('background-color', 'black');
    });

});