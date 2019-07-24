var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var x = 0;
var y = 0;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var h=360;
var s=50;
var l=45;
var a=1;
var n=1;
context.fillStyle='hsla('+h+', '+s+'%, '+l+'%, '+a+')';
while (n <= 22) {
    context.fillRect(x,y,canvasWidth,canvasHeight);
    x=x+10;
    y=y+10;
    canvasWidth=canvasWidth-20;
    canvasHeight=canvasHeight-20;
    h=h-17;
    n++;
    context.fillStyle='hsla('+h+', '+s+'%, '+l+'%, '+a+')';
}