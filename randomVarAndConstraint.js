
function setup() {
  createCanvas(400, 400);
  background(225,10)
}


function draw() {
  var colora = {
  r:constrain(mouseX, 150, 250),
  g:constrain(mouseY, 150, 250),
  b:constrain((mouseX+mouseY)%100, 150, 250)
}

var circuel = {
  xval:random(0,400),
  yval:random(0,400),
  diameter:random(0,20),
}
ellipse(200,200, 100)
noStroke();
  ellipse(circuel.xval, circuel.yval, circuel.diameter);
  fill(colora.r, colora.g, colora.b);
}