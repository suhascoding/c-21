var fixedRect, movingRect,fixed,moving;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  fixed = createSprite(100,100,50,50);
   fixed.velocityX = +5;

 moving = createSprite(300,100,50,50);
 moving.velocityX = -5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  

  bounceoffA(movingRect,fixedRect);
  bounceoffA(fixed,moving);
  
  drawSprites();
}






