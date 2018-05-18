var canvas;
var ctx;
var flag = false;

var ready = function(){
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 canvas.onmousedown = drawStart;

 canvas.onmousemove = drawing;
 window.onmouseup = drawEnd;
}

var w1 = function(){
 ctx.lineWidth = 0.1;
}
var w5 = function(){
 ctx.lineWidth = 5;
}
var w15 = function(){
 ctx.lineWidth = 15;
}
var w20 = function(){
    ctx.lineWidth = 20;
   }
var w30 = function(){
    ctx.lineWidth = 30;
   }


var A = function(){
 ctx.strokeStyle = '#93DAFF';
}
var B = function(){
    ctx.strokeStyle = '#ACF3FF';
   }
var C = function(){
    ctx.strokeStyle = '#C3E7FA';
   }
var D = function(){
    ctx.strokeStyle = '#00BFFF';
   }
var E = function(){
    ctx.strokeStyle = '#32F1FF';
   }
var F = function(){
    ctx.strokeStyle = '#00D7FF';
   }
var G = function(){
    ctx.strokeStyle = '#96A5FF';
   }
var H = function(){
    ctx.strokeStyle = '#86A5FF';
   }
var I = function(){
    ctx.strokeStyle = '#FF46C5';
   }
var J = function(){
    ctx.strokeStyle = '#808080';
   }
var K = function(){
    ctx.strokeStyle = '#000000';
   }
var white = function(){
    ctx.strokeStyle = '#ffffff';
   }

var drawStart = function(event){
 ctx.beginPath();
 var xpos = event.target.offsetLeft;
 var ypos = event.target.offsetTop;
 ctx.moveTo(event.clientX-xpos, event.clientY-ypos);
 flag = true;
}
var drawing = function(event){
 if(flag) {
 var xpos = event.target.offsetLeft;
 var ypos = event.target.offsetTop;
 ctx.lineCap = 'round'
 ctx.lineTo(event.clientX-xpos, event.clientY-ypos);
 ctx.stroke();
 }
}
var drawEnd = function(event){
 flag = false;
}
var save = function(){
 window.open(canvas.toDataURL());
}
var erase = function(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
}
