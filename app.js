var canvas = document.querySelector('#canvas');
 // HERE I'VE DEFINED THE WIDTH & THE HEIGHT OF THE CANVAS SO IT TAKES THE ENTIRE WIDTH & THE ENTIRE HEIGHT OF OUR PAGE
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 // HERE I'VE EXTRACTED THE CONTEXT OF THE CANVAS WITH THE METHOD getContext WHICH ALLOW US TO DRAW INSIDE OUR CANVAS
var drow = canvas.getContext('2d');

var myColor = drow.createLinearGradient(300, 30, 1000, 250);
myColor.addColorStop(0.4, 'red');
myColor.addColorStop(0.3, 'red');
myColor.addColorStop(1, 'salmon');

var myColorr = drow.createLinearGradient(100, 10, 300, 150);
myColor.addColorStop(0, '#48C');
myColor.addColorStop(0.5, '#4C8');
myColor.addColorStop(1, '#A4A');




// draw lines
     drow.beginPath();
     drow.lineWidth = '4';
     drow.fillStyle = myColor;
     drow.moveTo(0, 400);
     drow.lineTo(250, 100);
     drow.lineTo(500, 500);
     drow.lineTo(400, 500);
     drow.lineTo(250, 100);
     drow.lineTo(100, 500);
     drow.lineTo(250, 200);
     drow.lineTo(400, 500);
     drow.lineTo(15, 500);
     drow.lineTo(250, 100);
     drow.fill();

// SECONDE TRIANGLE
 drow.beginPath();
 drow.fillStyle = myColor;
 drow.moveTo(400, 500);
 drow.lineTo(600, 200);
 drow.lineTo(800, 500);
 drow.lineTo(700, 500);
 drow.lineTo(600, 200);
 drow.lineTo(500, 500);
 drow.lineTo(600, 300);
 drow.lineTo(700, 500);
 drow.lineTo(500, 500);
 drow.fill();
 // THIRD TRIANGLE
 drow.beginPath();
 drow.beginPath();drow.lineWidth = '0.1';
 drow.fillStyle = myColor;
 drow.moveTo(700, 500);
 drow.lineTo(1000, 110);
 drow.lineTo(1300, 500);
 drow.lineTo(1200, 500);
 drow.lineTo(1000, 110);
 drow.lineTo(800, 500);
 drow.lineTo(1000, 200);
 drow.lineTo(1200, 500);
 drow.lineTo(800, 500);
 drow.fill();
