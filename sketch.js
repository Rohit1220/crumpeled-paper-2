var dustbinIMG,side1,side2,side3,packageSprite,paperIMG;
var packageBody,ground;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var engine, world;
function preload()
{
dustbinIMG = loadImage("pictures/dustbingreen.png");
paperIMG = loadImage("pictures/paper (1).png")
}
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);
    packageSprite=createSprite(100,600,50,50);
    packageSprite.addImage(paperIMG);
    side1=createSprite(750,610,10,100);
    side2=createSprite(550,610,10,100);
    side3=createSprite(650,655,200,10);
    dustbin = createSprite(650,610,200,100);
    dustbin.addImage(dustbinIMG);
    groundSprite=createSprite(width/2,height-35,width,10);
    groundSprite.shapeColor=color(255)
    engine = Engine.create();
    world = engine.world;
    packageBody = Bodies.circle(100,500,5,{restitution:0.5, isStatic: false, density: 1});
    World.add(world, packageBody);
    ground = Bodies.rectangle(width/2,height-45,width,10,{isStatic:true});
    World.add(world,ground);   
    side2 = Bodies.rectangle(550, 610,10, 100 , {isStatic:true} );
    World.add(world,side2);  
    ground = Bodies.rectangle(650, 655,200, 100 , {isStatic:true} );
    World.add(world, side3);  
    side1 = Bodies.rectangle(750, 610,10, 100 , {isStatic:true} );
    World.add(world,side1);  
}
function draw() 
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  ellipse(packageBody.position.x, packageBody.position.y,50,50);
  packageSprite.visible=false;
  drawSprites();
}
function keyPressed()
{
    if (keyCode === 32)
    {
        console.log(packageBody);
    Matter.Body.applyForce(packageBody,packageBody.position,{x: 3,y:-3});
    }
}