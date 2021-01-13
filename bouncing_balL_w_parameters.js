var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -4,
}

function setup() {
  createCanvas(450, 400);
}

function draw() {
  move();
  bounce();
  display('WHITE',24,'red',1);

  function move() {
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
  }

  function bounce() {

    if (ball.x > width || ball.x < 0) {
      ball.xspeed = ball.xspeed * -1;
    }
    if (ball.y > height || ball.y < 0) {
      ball.yspeed = ball.yspeed * -1;
    }
  }

  function display(backgroundcolor, ballsize, fillcolor, strokeif) {
    background(backgroundcolor);
    ellipse(ball.x, ball.y, ballsize, ballsize);
    fill(fillcolor)
    if (strokeif == 1 || true){
      stroke(0);
      strokeWeight(1);
    }
    else{
      noStroke();
    }
  }



}