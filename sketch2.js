sounds = []
currSound = 0
nextSound = 1

function preload() {
   soundFormats('mp3', 'ogg');
   sounds.push(loadSound('boniver.mp3'));
   sounds.push(loadSound('debussy.mp3'));
   sounds.push(loadSound('django.mp3'));
}

function setup() {
	//createCanvas(displayWidth, displayHeight);
  createCanvas(1080,1920);
  for (i =0;i<sounds.length;i++){
    sounds[i].setVolume(0);
    sounds[i].play();
  }
  setMoveThreshold(4);
}

function draw(){
  background(255)
  text(val,width/2,height/2)
}

function deviceMoved() {
  stuff();
}

function mousePressed(){
  stuff();
}

val = 0
function stuff() {
  val += 1;
  sounds[currSound].setVolume(constrain(map(val,0,70,1,0),0,1))
  sounds[nextSound].setVolume(constrain(map(val,30,100,0,1),0,1))
  if (val==100){
    val = 0;
    currSound = nextSound
    nextSound++
    if (nextSound==sounds.length) nextSound = 0
  }

}
