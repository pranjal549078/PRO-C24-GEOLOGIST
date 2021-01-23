
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  
 var hammer,stone,rubber;
   

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
    
  stone = new Stone(700,350,70,70)
  hammer = new Hammer(500,50);
  ground = new Ground(600,height,1200,20)  
  rubber = new Rubber(150,350,50,70)

}




function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}



