let bubbles = [];
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i<5; i++){
    let x = random(width);
    let y = random(height);
    let r  = random(10,50);
    let b = new Bubble(x, y,r);
    bubbles.push(b)
  }

}

function mousePressed(){
    for(let i =0; i<bubbles.length;i++){
    bubbles[i].clicked();
      if(bubbles[i].clicked){
        bubbles.splice(i,1);
        return;
    }

    
  }

}
function draw() {
  background(0);
  for(let i =0; i<bubbles.length;i++){
    if(bubbles[i].clicked){
      bubbles[i].changeColor(255);
    }
    else{
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move(){
    this.x = this.x+random(-5,5)
    this.y = this.y+random(-5,5);
    
  }
  show(){
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x,this.y,this.r*2);
  }
  
  clicked(){
      let d = dist(mouseX,mouseY,this.x, this.y)
      if(d<this.r){
        print("CLICKED ON BUBBLE!");
        return true;
      } else {
        return false;
      }
    
    }
  
  changeColor(bright){
    this.brightness = bright;
  }  
  
}
