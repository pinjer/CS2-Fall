var bubble = {
  x:200,
  y:200,
  display:function(){
    
    stroke(255);
    strokeWeight(4);
    noFill();
    
    size ++
    ellipse(this.x,this.y,size);
    if(size>200){
      size = 0
    }
    },
  move:function(){
    this.x = this.x+random(-1,1);
    this.y = this.y + random(-1,1);
  },
  execute:function(){
    this.move();
    this.display();
  }
}

var spiderland = {
  x:200,
  y:200,
  display:function(){
    var line1 = line(0,0,bubble.x-(size/2),bubble.y-11)
    var line2 = line(400,400,bubble.x+(size/2),bubble.y+11);
    var line3 = line(0,400,bubble.x-(size/2),bubble.y+1);
    var line4 = line(400,0,bubble.x+(size/2),bubble.y-11);
  },
  execute:function(){
    this.display();
  }
}
function setup() {
  size = 1;
  createCanvas(400, 400);
}

function draw() {
  background(0);
  bubble.execute();
  spiderland.execute();
}
