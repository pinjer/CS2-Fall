var vals = [300,200,100,400,500,600,700,800,900]
function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  // for(var i = 0; i<30;i++){
  //   ellipse(i,i,vals[i]);
  for(let ellipsex of vals){
    print(ellipsex)
  }
  // }
}