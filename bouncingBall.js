let x = 1;
let speed = 3;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(x,200,100);
  if (x>350){
    speed = -3;
    x = x+speed
  }
  else if(x<0){
    print("Off the screen.")
  }
    
  
  
  else if(x<50){
    speed = 3;
    x = x+speed;
  }
  x = x+speed
  
}