class Indian
{
    constructor() {
        this.x = 100;
		this.y=500;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="black";
        this.spt.addAnimation("indian",iimage);
        this.spt.scale=0.3;
		
    }

    
      moveLeft()
      { 
          this.spt.x=this.spt.x-12;
      }
  
      moveRight()
      { 
          this.spt.x=this.spt.x+12;
      }
  
      moveUp()
      { 
          this.spt.velocityY=-21;
      }
      moveDown()
      {
        this.spt.velocityY=+21;
      }
      
  }