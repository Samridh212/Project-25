const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, crumbledpaper, ground;
var engine, world;

function setup() 
{
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	crumbledpaper = new Paper(80, 450, 70);
	ground = new Ground(600, 600, width, 80);
	dustbin = new Dustbin(1000, 550);

	Engine.run(engine);
}

function draw()
{
	background(230);
	rectMode(CENTER);
	crumbledpaper.display();
	ground.display();
	dustbin.display();
	
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Body.applyForce(crumbledpaper.body, crumbledpaper.body.position, {x: 130, y: -145});
	}
}