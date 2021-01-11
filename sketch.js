var speed,weight
function setup() {
  createCanvas(800,400);
 car = createSprite(50, 200, 50, 50);
 car.shapeColor = "white"
 
 speed = random(50,100)
 weight = random(400,500)
 wall = createSprite(700,200, 25,100);
 wall.shapeColor = "white"
}

function draw() {
  background(0,0,0);  
  car.velocityX= speed
  if(wall.x - car.x < car.width/2 + wall.width/2){
 car.velocityX = 0
 var deformation = 0.5 * weight*speed*speed/22509
if(deformation>180){
car.shapeColor ="red"
} if(deformation<180 && deformation> 100){
car.shapecolor = "yellow"
}if (deformation < 100){
car.shapeColor = "green"
}
  }
  

  
  
  

  drawSprites();
}
