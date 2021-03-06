let brushColor = ("#000000");

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  let rainbow = color(mouseX % 400, ((mouseY + mouseX) / 2) % 400, mouseY % 400);
  let black = color(0, 0, 0);
  strokeWeight(1);
  fill(black);
  rect(0, 0, 50, 50);
  fill(rainbow);
  rect(0, 50, 50, 400);
//right click to color pick rainbow, left click on the box for whatever blue color you want
  if (mouseIsPressed == true && mouseX>50 && mouseButton==LEFT) {
    noStroke();
    fill(brushColor);
    circle(mouseX, mouseY, 8);
  } else if (mouseIsPressed == true && mouseX < 50 && mouseY < 50) {
    brushColor = ("#000000");
  } else if (mouseIsPressed == true && mouseX < 50 && mouseY > 50) {
    brushColor = rainbow;
  } else if (mouseIsPressed && mouseButton==RIGHT){
    brushColor=rainbow;
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