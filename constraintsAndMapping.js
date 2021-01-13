let brushColor = ("#000000");

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  var conmx = constrain(mouseY, ylo, yhi);
  var ylo = (400);
  var yhi = (50);
  var val = map(mouseY, ylo, yhi, 0, 1)
  let red = color("red");
  let black = color(0, 0, 0);
  let blue = color("blue")
  var myFill = lerpColor(red, blue, val)
  fill(myFill);
  ellipse(200,200,20);
  strokeWeight(1);
  fill(black);
  rect(0, 0, 50, 50);
  fill(myFill);
  rect(0, 50, 50, 400);
  line(conmx, 50, conmx, 100);
//right click to color pick rainbow, left click on the box for whatever blue color you want
  if (mouseIsPressed == true && mouseX>50 && mouseButton==LEFT) {
    noStroke();
    fill(brushColor);
    circle(mouseX, mouseY, 8);
  } else if (mouseIsPressed == true && mouseX < 50 && mouseY < 50) {
    brushColor = ("#000000");
  } else if (mouseIsPressed == true && mouseX < 50 && mouseY > 50) {
    brushColor = myFill;
  } else if (mouseIsPressed && mouseButton==RIGHT){
    brushColor=myFill;
  }

  function keyPressed() {
    if (keyCode === "R") {}
    background(220);

  }
}

//     log("painting");
//     }else if(mouseIsPressed==true && mouseX<50 && mouseY<50){
//     log("blacK");
//     fill(black);
//   }else if(mouseIsPressed==true && mouseX<=50&&mouseY>=50){
//     stroke(rainbow);
//     fill(rainbow);
//     log("Painting rainbow");