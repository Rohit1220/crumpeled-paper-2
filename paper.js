class paper
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:0.5,
			density:0.3
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		this.image = loadImage("paper (1).png")
	}
	display()
	{
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			strokeWeight(3);
			fill(255,0,255)
			imageMode(RADIUS);
        image(this.image, 0, 0,this.r,this.r);
			pop()
			
	}

}