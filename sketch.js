var player1, player2, image1, image2, backgroundImage
var ground, laserGroup, laserGroup2;
var score1, score2
var gameState = 0
var PLAY = 1
var END = 2

function preload(){
  backgroundImage = loadImage("images/warp background.gif")
  image1 = loadImage("images/image 2.gif")
  image2 = loadImage("images/image 1.gif")
}
function setup() {
  createCanvas(400,400);
  ground = createSprite(400,350,800,20)
  ground.shapeColor = "red";
  laserGroup = createGroup();
}

function draw() {
  background(backgroundImage);
  if (gameState === PLAY){
    Game.play();
} 
if(gameState === END){
  Game.end();
}
player1.collide(ground);
player2.collide(ground);
drawSprites();
}