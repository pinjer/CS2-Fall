
function setup() {
  createCanvas(400, 400);
  background(225,10)
}


function draw() {
  var colora = {
  r:random(0,255),
  g:random(0,255),
  b:random(0,255),
}

var circuel = {
  xval:random(0,400),
  yval:random(0,400),
  diameter:random(0,20),
}
noStroke();
  ellipse(circuel.xval, circuel.yval, circuel.diameter);
  fill(colora.r, colora.g, colora.b);
}