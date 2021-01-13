function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let i = 0;
  let g = 0;
  while(i<400){
    i++
    randomRect={
      x:random(0,400),
      y:random(0,400),
      val1:random(0,mouseY),
      val2:random(0,mouseX),
      fillcolor:color(random(0,mouseX),random(0,mouseX+mouseY),random(0,mouseY))
    
    }
    while(g<50){
      g++
      randomEllipse={
      x:random(0,400),
      y:random(0,400),
      val1:random(0,mouseY),
      val2:random(0,mouseX),
      fillcolor:color(random(0,mouseX),random(0,mouseX+mouseY),random(0,mouseY))
    }
    rect(randomEllipse.x, randomEllipse.y, randomEllipse.val1, randomEllipse.val2)
    fill(randomRect.fillcolor)
    }
  }
}