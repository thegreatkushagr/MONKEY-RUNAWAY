//Global Variables
var bg, jungleImage;
var ground, groundImage;

var monkey, monkeyImage;

var play, gamestate, end;

var rockg, bananag;

var bananaimg, rockimage;

var score;
function preload(){
  jungleImage = loadImage("jungle.jpg");
  bg = createSprite(300,150,20,20);
  
  ground = createSprite(300,310,20,20);
  groundImage = loadImage("ground.jpg");
  
  monkeyImage = loadAnimation("Monkey_01.png",    "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png",    "Monkey_08.png", "Monkey_09.png");
  monkey = createSprite(70,250,20,20);

  gameState = play;
  
  bananag = new Group();
  rockg = new Group();
  
  bananaimg = loadImage("Banana.png");
 rockimage = loadImage("stone.png");

  score = 0;
}


function setup() {
  createCanvas(600,300);
  bg.addImage("background", jungleImage);
  bg.scale = 0.7;

  ground.addImage("ground", groundImage);
  ground.scale  = 0.2
  
  monkey.addAnimation("bandar", monkeyImage);
  monkey.scale = 0.10101;
}


function draw(){
   background(215); 

  //console.log(score)
  ground.visible = false
   ground.setCollider("rectangle",0,0,5000,500);
  
    monkey.collide(ground)
    monkey.velocityY = monkey.velocityY + 0.8;
  
  
   if(keyDown("space") && monkey.y > 230){
       monkey.velocityY = -12;
   } 
  
  
  bg.velocityX = -3;
  if(bg.x < 240){
    bg.x = 360;
  }
  
  if(bananag.isTouching(monkey)){
     bananag.destroyEach();
    score = score + 2;
  }
  
  if(rockg.isTouching(monkey)){
     monkey.scale = 0.102;
    score - 5;
  }
 
  switch(score){
    case 10: monkey.scale = 0.12;
            break;
    case 20: monkey.scale = 0.14;
            break;
    case 30: monkey.scale = 0.16;
            break;
    case 40: monkey.scale = 0.18;
            break;
    default: break;
  }
  
  spawnBanana();
  spawnrock();
  
  
 drawSprites(); 
}
function spawnBanana() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(640,365,10,40);
    banana.velocityX = -7;

    banana.addImage("kela", bananaimg);
    
    banana.scale = 0.05;
    banana.y = random(160,250);
    
    banana.lifetime = 95;
   
   banana.depth = bg.depth+1;  
  
   bananag.add(banana);
  }
}
function spawnrock() {
  if(frameCount % 150 === 0) {
    var rock = createSprite(620,250,10,40);
    
    rock.debug = true;
    
    rock.velocityX = -7;
    
    rock.addImage("pathar", rockimage);
    
    rock.scale = 0.20;

    rock.setCollider("circle",0,0,200);
    
    rock.lifetime = 95;
   
    rockg.add(rock);
  }
}
