class Bullet
{
    constructor() {
        this.x = 100;
		this.y=500;
		this.spt1=createSprite(this.x, this.y, 350,100);
        this.spt1.scale=0.09;
        this.spt1.velocityX=9
        this.spt1.addAnimation("Bullet",buimage);
    }

    
}