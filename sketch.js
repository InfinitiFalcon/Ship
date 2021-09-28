
function preload(){
  shipmoving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seabg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
  sea = createSprite(200, 200, 50, 50)
  sea.addImage(seabg)
  sea.velocityX = 2
  if(sea.x > 400){
    sea.x = 200
  }
  ship = createSprite(200, 200, 50, 50)
  ship.addAnimation(shipmoving)

}