let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}


let bhue = 227;
let HUEG=170;
let colorvalue = 0;
let pastcolorvalue = 0;
let HUE = 0;
let amt = 0;
let ghue = 252;
function setup() {
  createCanvas(400, 400);
  // frameRate(10)
   w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {

  HUEG += 1;
  if (HUEG > 255) {
    HUEG = 170;
  }
  background(0,HUEG,0)
  
  ghue -=1;
  if(ghue<80){
    ghue = 227;
  }
  bhue +=1
  if (bhue > 255){
    bhue = 227;
  }
  b = color(3, ghue, bhue)
  fill(b)
  ellipse(200,-40,500,500)
  
  
  HUE += 10;
  if (HUE > 255) {
    HUE = 0;
  }
  COLORVALUES = [color(253, 47, 36), color(255, 111, 1), color(254, 216, 0)];
  PASTCOLORVALUES = [COLORVALUES[2], COLORVALUES[1], COLORVALUES[0]]
  let pastcolor = PASTCOLORVALUES[colorvalue];
  let firstcolor = COLORVALUES[colorvalue];

  
  amt += 0.01;
  if (amt>= 1.01) {
    amt = 0.0;
  }
  if(amt>=1){
    colorvalue++;
  }
  if (colorvalue > 2) {
    colorvalue = 0;
  }
  stroke(HUE, 200, 100)
  fill(lerpColor(firstcolor, pastcolor, amt))
  let arcSize = 50;
  let arcL = map((mouseX + mouseY) / 1.7, 0, width, 0, TWO_PI)
  arc(width / 2, height / 3, arcSize, arcSize, 0, arcL);


  // COLORVALUES = ['#fd2f24','#ff6f01','#fed800']
  // PASTCOLORVALUES = ['#fed800','#fd2f24','#ff6f01']

  //checker
  // print(str(PASTCOLORVALUES[colorvalue] + ' ' + colorvalue))
  // pastcolorvalue = color(PASTCOLORVALUES[colorvalue])
  // colorvalue = color(COLORVALUES[colorvalue]);



  // setGradient(pastcolor, firstcolor)
  
  noStroke();
  fill(HUE,100,200);
  ellipse(250, 250, 180, 80)
  fill(HUE,100,200);
  ellipse(170, 270, 140, 80)

  // for(let HUE = 0; HUE<255; HUE +=10){
  //   if(HUE>255){
  //     HUE = 0;
  //     background(HUE,200,100)
  //   }
  // }


  //   let HUE = 0;
  //   while(true){
  //     HUE<255 ? HUE+=10 : HUE=0;
  //     print(HUE)
  //   }


  //   let HUE=0;
  // while(true){
  //   if(HUE<255){
  //     HUE=+10;
  //   }
  //   else{
  //     HUE=0;
  //   }
  //   print(HUE)
  // }

  calcWave();
  renderWave();
}


function renderWave() {
  noStroke();
  fill(HUE,-1*HUE,255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}


// function setGradient(c1, c2) {
//   // noprotect
//   noFill();
//   for (var y = 0; y < height; y++) {
//     var inter = map(y, 0, height, 0, 1);
//     var c = lerpColor(c1, c2, inter);
//     stroke(c);
//     line(0, y, width, y)
//   }
// }