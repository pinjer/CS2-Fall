function setup() {
  createCanvas(400, 400);
  noLoop();
}



function draw(){
  var fontChoice = [
    "Times New Roman",
    "Sen",
    "Comic Sans"
  ]
  let textFont = fontChoice[random(fontChoice.length)-1];
  textSize(random(29,30))
  let words = ["Good", "Morning", "Captain"]
  let wordChoice = words[floor(random(words.length))]
  text(wordChoice,0,200);
}