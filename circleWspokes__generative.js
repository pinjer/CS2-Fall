const CRYSTAL_SIZE = 200
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(530, 530, SVG)
  PALETTE = [
    color(255, 52, 154),
    color(4, 0, 152),
    color(0, 0, 0),
  ]
  angleMode(DEGREES)
  rectMode(CENTER)

}

function draw() {
  //testLines()
  // outlineShape()
  //simpleLines()
  //circle()
 
  triang()
//   let picker = random(1)
//   if (picker>0.3){
//     outlineShape()
//   }
//   picker=random(1)
//   if(picker>0.3){
//     simpleLines()
//   }
//   picker = random(1)
//   if (picker>0.3){
//     circle()
//   }
//   picker = random(1)
//   if(picker>0.3){
//     triang()
//   }
  for(i=0; i%20==2;i++){
    background(255,255,255,1);
  }
}

function triang(){
  const numShapes = SIDES
  const angle = 360/numShapes
  const shapeSize = (CRYSTAL_SIZE / 2 ) *0.93
  const position = (CRYSTAL_SIZE/2) - (shapeSize/2)
  
  const strokeColor = getRandomFromPalette()
  stroke(strokeColor)
  strokeWeight(1)
  val1 = random(shapeSize)
  val2 = random(shapeSize)
  val3 = random(shapeSize)
  val4 = random(shapeSize)
  val5 = random(shapeSize)
  push()
  translate(width/2, height/2)
    for(let i = 0; i<= numShapes; i++){
    triangle(position, val1 ,val2, val3, val4 ,val5)
    rotate(angle)
  }
  pop()
  
  
}
function circle(){
  noFill();
  const numShapes = SIDES
  const angle = 360/numShapes
  const shapeSize = (CRYSTAL_SIZE / 2) * 0.93
  const position = (CRYSTAL_SIZE /2) - (shapeSize/2)
  const strokeColor = getRandomFromPalette()
  
  stroke(strokeColor)
  strokeWeight(1)
  push()
  translate(width/2,height/2)
  for(let i = 0; i<= numShapes; i++){
    ellipse(position, 0 ,shapeSize, shapeSize)
    rotate(angle)
  }
  pop()
  
}


function simpleLines(){
  const stepsOut = 8
  const numSteps = randomSelectTwo() ? stepsOut : stepsOut*1.25
  const step = (CRYSTAL_SIZE / 2) / numSteps
  const start = floor(random(0,numSteps))
  const stop = floor(random(start,numSteps+1))
  
  
    let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()
  const weight = randomSelectTwo() ? 1 : 3
  const angle = 360 / numShapes
  
  noFill()
  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width / 2, height / 2)
  stroke(strokeColor)

  for (let i = 0; i < numShapes; i++) {
    line(start*step, 0, stop*step, 0)
    rotate(angle)
  }
  pop()
}

function hexagon(posX, posY, radius) {
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle(posX, posY, radius, angle) {
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

function outlineShape() {
  const strokeColor = getRandomFromPalette()
  stroke(strokeColor)
  const weight = randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()
  push()
  strokeWeight(weight)
  translate(width / 2, height / 2)
  if (hexagonTrue) {
    hexagon(0, 0, CRYSTAL_SIZE / 2)
  } else {
    ellipse(0, 0, CRYSTAL_SIZE)
  }
  pop()
}

function testLines() {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()
  noFill()
  stroke(PALETTE[0])
  push()
  translate(width / 2, height / 2)
  ellipse(0, 0, CRYSTAL_SIZE);
  stroke(strokeColor)
  const angle = 360 / numShapes
  for (let i = 0; i < numShapes; i++) {
    line(0, 0, 0, CRYSTAL_SIZE / 2)
    rotate(angle)
  }
  pop()
}

