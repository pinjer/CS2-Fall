function setup(){
  createCanvas(500,500,SVG);
  angleMode(DEGREES);
  rectMode(CENTER)
}
function draw(){
  background('teal')
  fill(0);
  push()
    translate(width/2,height/2);
    rect(0,0,25,25);
    rotate(45);
  pop()
  push()
  fill('red');
  rect(0,0,25,25);
  rotate(1);
}