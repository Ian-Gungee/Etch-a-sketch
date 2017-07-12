/* Using jQuery 3.2.1 */
var pixelSize = 50;
var x;
var y;
var pX = 0;
var pY = 0;
var newDiv;
var canvas = document.getElementsByClassName('canvas');
var pixels = document.getElementsByClassName('pixel');
var inputX = document.getElementById('width');
var inputY = document.getElementById('height');

$(document).ready(function() {
    /* Once page has loaded */
    console.log('Page Loaded')

    /* Sets defaults */
    x = 7;
    y = 3;
    inputX.value = x;
    inputY.value = y;

    /* Initializes canvas (See below) */
    DrawCanvas();
    PaintPixel();
});

    /* Activates and highlights pixels when moused over*/
    function PaintPixel(){
    $('.pixel').mouseenter(function(){
        $(this).css('opacity', 1);
        $(this).css('background-color', 'rgb(70,70,70)');
    });
    /* Returns unhighlighted pixels to black */
    $('.pixel').mouseleave(function(){
        $(this).css('background-color', 'black');
    });
}


/* Refreshes screen and draws a new canvas */
function Submit(){
        x = inputX.value;
        y = inputY.value;
    var prompt = confirm("Rendering canvas: " + x + "x" + y + ". This will erase your current work. Ok?");
    if (prompt == true) {
        pX = 0;
        pY = 0;
        $('.canvas').empty();
        DrawCanvas();
        PaintPixel();
    }

}



/* Nested for loops that draw pixels one by one, starting from top to bottom, then left to right */
function DrawCanvas() {
    if (y>x)
    {
        pixelSize = ($(window).height())/2/y;
        $('.canvas').css('width', (pixelSize*x).toString()+'px');

    } else {
        pixelSize = ($(window).width())/2/x;
        $('.canvas').css('width', (pixelSize*x).toString()+'px');
    }

    for (q=0; q < x; q++) {

        for (w=0; w < y; w++) {
            newDiv = document.createElement('div');
            newDiv.className = 'pixel';
            newDiv.id = 'p' + pX + pY;
            console.log("drawing: "+newDiv.id);
            $('.canvas').append(newDiv);
            pY += 1;
        }
        newDiv.id = 'p' + pX + pY;
        $('.canvas').append(newDiv);
        console.log("drawing: "+newDiv.id);
        pX += 1;
        pY = 0;
    }
    $('.pixel').css('height', pixelSize+'px');
    $('.pixel').css('width', pixelSize+'px');
    console.log('all pixels rendered');
}
