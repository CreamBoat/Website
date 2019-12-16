var canvas = document.getElementById("canvas1");
var can = canvas.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;

canvas.width = w;
canvas.height = h;

solveButton(w, h, can);
