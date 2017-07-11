var pixelSize = 10;
var x;
var y;
var pX = 0;
var pY = 0;
var inputX = document.getElementById('width');
var inputY = document.getElementById('height');
var rad = 1;

$(document).ready(function() {
    /* Once page has loaded */
    console.log('Page Loaded')

    /* Sets text inputs to default x & y values */
    x = 10;
    y = 10;

    inputX.value = x;
    inputY.value = y;

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


/* Refreshes screen and draws a new canvas */
function submit(){
        x = inputX.value;
        y = inputY.value;
    var prompt = confirm("Rendering canvas: " + x + "x" + y + ". This will erase your current work. Ok?");
    if (prompt == true) {
        pX = 0;
        pY = 0;
        console.log("x: "+x);
        console.log("y: "+y);
        $('.canvas > .pixel').remove();
        drawCanvas();
    }

}


var newDiv;
var canvas = document.getElementsByClassName('canvas');
var pixels = document.getElementsByClassName('pixel');

/* Nested for loops that draw pixels one by one, starting from top to bottom, then left to right */
function drawCanvas() {
    for (q=0; q < x; q++) {

        for (w=0; w < y; w++) {
            newDiv = document.createElement('div');
            newDiv.className = 'pixel';
            newDiv.id = 'p' + pX + pY;
            newDiv.style.left = ((pX*pixelSize).toString())+"px";
            newDiv.style.top = ((pY*pixelSize).toString())+"px";
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
    console.log('all pixels rendered');
}
