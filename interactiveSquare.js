let x = 1;
let speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  square(x, 200, 100);
  if (mouseIsPressed == true) {
      speed = speed * -1
    }
  
  else if (x > 300) {
    speed = -3;
    x = x + speed

  } else if (x < 0) {
    speed = 3;
    x = x + speed;
  } 
  x = x + speed

}