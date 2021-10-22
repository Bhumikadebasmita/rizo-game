var indianPlane;
var bullet;
var pakistan1, pakistan2, pakistan3;
var score = 0;
var iimage;
var pimage;
var bimage;
var buimage;
var backgroundImg;
var state = 0 ;
var bullet1,bulletGroup;

function preload(){
iimage=loadAnimation("images/ind2.png")
pimage=loadAnimation("images/pak.png")
bimage=loadAnimation("images/bul2.png")
buimage=loadAnimation("images/bu2.png")
backgroundImg = loadImage("images/sky.jpg");
}

function setup() {
  createCanvas(1000,1000);
  indianPlane=new Indian();
 
  bullet=new Bullet();
  pakistan1=new Pakistan(900,200);

  b1=createSprite(500,5,1000,10);
  b1.visible=false;
  b2=createSprite(500,995,1000,10);
  b2.visible=false;

  bulletGroup=new Group();
}

function draw() {
  background(backgroundImg); 
  
  indianPlane.spt.bounceOff(b1);
  indianPlane.spt.bounceOff(b2);
  pakistan1.spt.bounceOff(b1);
  pakistan1.spt.bounceOff(b2);


   if(bullet.spt1.isTouching(pakistan1.spt)){
    state = 1;
   }
  
   if(bulletGroup.isTouching(indianPlane.spt)){
     state = 1;
   }

   if(state==1){
    pakistan1.spt.destroy();
    indianPlane.spt.destroy();
    bullet.spt1.destroy();
    bulletGroup.destroyEach();
    textSize(40);
    fill ("red")
    text("Game Over",350,500);
   }
  
  if (keyDown("left"))  
  { 
    indianPlane.moveLeft();
  }
  if (keyDown("right")) 
  { 
    indianPlane.moveRight();
  }
  if (keyDown("up"))
  {
    indianPlane.moveUp();
  }
  if (keyDown("down"))
  {
    indianPlane.moveDown();
  }
  if(state==0){
 pbullet();
  }
  drawSprites();
}
function pbullet(){
  if(frameCount%50==0){
    bullet1=createSprite(pakistan1.spt.x,pakistan1.spt.y,20,20);
    bullet1.velocityX=-4;
    bullet1.addAnimation("pbullet",bimage);
    bullet1.scale=0.2;
    bulletGroup.add(bullet1);
    
  }
}