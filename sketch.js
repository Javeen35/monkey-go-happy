
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  
  createCanvas(600, 400);
  
  monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = 4;
  ground.x = ground.width/2;
  console.log(ground);
  
  
  invisibleGround = createSprite(400,350,900,10);
  
  bananasGroup = createGroup();
  obstaclesGroup = createGroup();
 
  score = 0;
}


function draw() {

  background("white");
  
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: " + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival time: " + survivalTime, 100, 50);
  
  spawnBananas();
  spawnObstacles();
  
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);

  drawSprites();
}


function spawnBananas(){
  
  if (frameCount % 80 === 0){
    var banana = createSprite(500, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.velocityX = -3;
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    
    
    banana.lifeTime = 300;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananasGroup.add(banana);
    
    
  }
  
  
}

function spawnObstacles(){

    if (frameCount % 80 === 0){
    var obstacle = createSprite(600, 125, 10, 40);
    obstacle.y = 330;
    obstacle.velocityX = -3;
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    
    
    obstacle.lifeTime = 300;
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    obstaclesGroup.add(obstacle);
    }
    

}






