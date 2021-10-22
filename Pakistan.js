class Pakistan
{
    constructor(x,y) {
        this.x = x;
		this.y=y;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("pakistan",pimage);
        this.spt.scale=0.5;
		this.spt.velocityY=4;
    }
}