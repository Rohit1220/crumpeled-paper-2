const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var gameState = launched = (paperObject.velocityx<=1 || paperObject.velocityY<=0.5)
var world;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	Engine.run(engine);
	//Render.run(render);
}
function draw() {
  rectMode(CENTER);
  background(225);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}