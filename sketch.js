 var sea
var ship
function preload(){
seaImg = loadImage("sea.png")
ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(1000,1000);
  sea = createSprite(1,1,100,100)
  sea.addImage(seaImg);
  ship=createSprite(220,220,50,50);
  ship.addAnimation("ship",ship1)
  ship.scale=0.2
}

function draw() {
  background("white")
  drawSprites()
 sea.velocityX=sea.velocityX=0.2
 ship.velocityX=shipivelocityX=-0.3
}
