
function preload(){
  shipmoving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seabg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 150, 50, 50)
  sea.addImage("sea", seabg)
  sea.velocityX = -5
  sea.scale = 0.3
  ship = createSprite(200, 200, 50, 50)
  ship.addAnimation("ship", shipmoving)
  ship.scale = 0.25
}

function draw() {
  background("blue");
  
  if(sea.x < 0){
    sea.x = width/8
  }
  drawSprites()
}