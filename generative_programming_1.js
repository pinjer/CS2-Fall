let r = 1;
let g = 1;
let b = 1;
let vp = 1;
let hp = 1;
function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(30);
  noStroke();
  rectMode(CENTER)
  
}

function draw() {
  r = random(150,255);
  g = random(0,0);
  b = random(0,0);
  fill(r,g,b);
  rect(50*hp, 50*vp, 100,100);
  r = random(0,0);
  g=random(0,0);
  b=random(0,255);
  fill(r,g,b);
  circle(50*hp,50*vp,85);
  hp = hp+ 2;
  if(hp>9){
    hp=1;
    vp = vp +2;
  }
}