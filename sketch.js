var car,wall;
var speed,weight;

function setup() {
  createCanvas(15000,1500);

  speed = random(55,70);
  weight = random(400,1500);

  car = createSprite(400, 300, 50, 50);
  car.shapeColor = color(255);
  car.velocityX = speed;

  wall = createSprite(1200,300,60,400);
  
}

function draw() {
  background(0);
  
  if(wall.x - car.x < (car.width + wall.width)/1){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }

    if(deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    } 
  }
  drawSprites();
}