function setup() {
  createCanvas(400, 400);
  secondCanvas = createGraphics(400,400);
  secondCanvas.clear();
  background(255,0,0,0);
}

function draw() {
  mainSquare ={
    x:random(-5,5),
    y:random(-5,5),
  }
  background(0)
  if(mouseIsPressed){
    secondCanvas.fill(255,150);
    secondCanvas.noStroke();
    secondCanvas.ellipse(mouseX, mouseY, 60)
  }
  image(secondCanvas, 0, 0)
  rect(mainSquare.x,mainSquare.y,20)
  fill(255,0,0);
}
