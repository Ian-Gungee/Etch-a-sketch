var x = 5;
var y = 5;
var pX = 0;
var pY= 0;

$(document).ready(function() {
    /* Once page has loaded */
    console.log('Page Loaded')

    /* Sets text inputs to default x & y values 
    document.getElementById('width').nodeValue = x;
    document.getElementById('height').nodeValue = y;
    */


    drawCanvas();

    /* Activates and highlights pixels when moused over*/
    $('.pixel').mouseenter(function(){
        $(this).fadeTo(0, 1);
        $(this).css('background-color', 'rgb(70,70,70)');
    });
    /* Returns unhighlighted pixels to black */
    $('.pixel').mouseleave(function(){
        $(this).css('background-color', 'black');
    });



});

var newDiv;
var canvas = document.getElementsByClassName('canvas');
var pixels = document.getElementsByClassName('pixel');

function drawCanvas() {
    for (i=1; i <= x; i++) {
        for (i=1; i <= y; i++) {
            newDiv = document.createElement('div');
            newDiv.className = 'pixel';
            newDiv.id = 'p' + pX + pY;
            $('.canvas').append(newDiv);
            pY += 1;
            console.log('y = ' + pY);
        }

        newDiv.id = 'p' + pX + pY;
        $('.canvas').append(newDiv);
        pY += 1;
        console.log('y = ' + pY);
    }
    console.log('all pixels rendered');
}

/* Refreshes screen and draws a new canvas */
function submit(){
    pX = 0;
    pY = 0;
    $('.canvas > .pixel').remove();
    drawCanvas();
    alert("Rendering canvas: " + x + "x" + y);

}