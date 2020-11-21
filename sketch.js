var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey_is_running,monkey;

var InvisibleGround;

var jungle_image,jungle;

var bananaGroup,banana_image;

var obstaclesGroup,obstacle_image;

var score

function preload(){
jungle_image = loadImage("jungle.jpg"); 
  
monkey_is_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  
  
banana_image = loadImage("banana.png");

obstacle_image = loadImage("stone.png");   
  
}

function setup(){
createCanvas(600,400);  

jungle = createSprite(300,300,1,1);
jungle.addImage(jungle_image);
jungle.velocityX = -3;  
jungle.x = jungle.width/2;  

InvisibleGround = createSprite(600,300,1000,10);
InvisibleGround.velocityX = -3;
InvisibleGround.x = InvisibleGround.width/2; 
InvisibleGround.visible = false;  
  

monkey = createSprite(70,270,1,1);
monkey.addAnimation("is_running",monkey_is_running)
monkey.scale = 0.1;   
  
obstaclesGroup = createGroup();
bananaGroup = createGroup(); 
  
score = 0;  
}

function draw(){
background("white");
  
text("Survival Time: "+ score, 400,50);    

if(gameState === PLAY){
  if (InvisibleGround.x < 0){
      InvisibleGround.x = InvisibleGround.width/2;
      }
  if (jungle.x < 0){
      jungle.x = jungle.width/2;
      }
  
   // for spawning obstacles  
  spawn_obstacle();
    
  //for spawning  bananas 
  spawn_bananas();
  
  score = score + Math.round(getFrameRate()/60);
  
  //if (monkey.isTouching(bananaGroup)){
      //monkey.scale = monkey.scale+0.1;  
      
  //}
  
  if (score === 100){
  monkey.scale = 0.12;  
    
  }
  
  if(score === 200){
  monkey.scale = 0.14;  
    
  }
  
  if(score === 500){
  monkey.scale = 0.16;  
    
  }
  
  if(score === 1000){
  monkey.scale = 0.18;  
    
  }
  
  if(score ===1500 ){
  monkey.scale= 0.2;
    
  }
  
  if(monkey.isTouching(obstaclesGroup)){
    monkey.scale = 0.1;
    
  }
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    } 
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(InvisibleGround);
  
}
  

  
  
  
  
drawSprites(); 
  
}

function spawn_bananas(){
        if(frameCount % 80 === 0){
        var banana = createSprite(600,200,1,1);
        banana.y = Math.round(random(120,200));  
        banana.addImage(banana_image);
        banana.lifetime = 200;
        banana.velocityX = -3; 
        banana.scale = 0.1;
        bananaGroup.add(banana);  
        }    
}

function spawn_obstacle(){
      if(frameCount % 300 === 0){
      var obstacle = createSprite(600,300,1,1);
      obstacle.addImage(obstacle_image);
      obstacle.velocityX = -3;  
      obstacle.scale = 0.1;
      obstacle.lifetime = 200;  
      obstaclesGroup.add(obstacle);
      }
}