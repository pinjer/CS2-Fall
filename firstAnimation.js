function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200,200,20);
  function fillred(){
    fill(255,0,0);  
  }
  
  function fillblue(){
    fill(0,0,255)  
  }
  setTimeout(fillblue, 2000);
  setTimeout(fillred, 1000);
}