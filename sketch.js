dir = 0;
s = 30;

function preload() {
   soundFormats('mp3', 'ogg');
   sound1 = loadSound('boniver.mp3');
   sound2 = loadSound('debussy.mp3');
   sound3 = loadSound('django.mp3');
}

function setup() {
	//createCanvas(displayWidth, displayHeight);
  createCanvas(1080,1920);
	fill(255);
	noStroke();
  textSize(30);

  sound1.play();
  sound1Pos = createVector(width/2,0);
  sound2.play();
  sound2Pos = createVector(0,height/2);
  sound3.play();
  sound3Pos = createVector(width,height);

	pos = createVector(width/2,height/2);
//  speed = createVector(0,0);
}

function deviceMoved() {
  dir = radians(rotationX);
  pos.x += cos(dir)
  pos.y += sin(dir)
}


function draw() {
//  pos.x = mouseX;
//  pos.y = mouseY;


  sound1.setVolume(constrain(map(pos.dist(sound1Pos),0,700,0.1,0),0,0.1))
  sound2.setVolume(constrain(map(pos.dist(sound2Pos),0,700,1,0),0,1))
  sound3.setVolume(constrain(map(pos.dist(sound3Pos),0,700,1,0),0,1))

	background(0);
  fill(130);
  ellipse(sound1Pos.x,sound1Pos.y,400)
  ellipse(sound2Pos.x,sound2Pos.y,400)
  ellipse(sound3Pos.x,sound3Pos.y,400)
  fill(255)
	ellipse(pos.x,pos.y,s);

}
