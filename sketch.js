const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var helicopter,helicopterImg;

var ground;

var package;

function preload()
{
  helicopterImg = loadImage("helicopter.png");
}

function setup() 
{
  var canvas = createCanvas(800,700);

  helicopter = createSprite(width/2,100,20,20);
  helicopter.addImage(helicopterImg);
  helicopter.scale=0.7;
  
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  fill ("grey");
  ground = Bodies.rectangle(width/2,height-10,width,40,{isStatic: true});
  World.add(world,ground);

  bottomBox = new Box(400,671,200,20);
  leftBox = new Box(300,630,20,100);
  rightBox = new Box(500,630,20,100);

  package = new Package(helicopter.x-5,80);
  Body.setStatic(package.body, true);

}

function draw() 
{
  Engine.update(engine);

  background("black");
  
  var pos = ground.position;
  rect(pos.x,pos.y,width,20);

  bottomBox.display();
  leftBox.display();
  rightBox.display();

  package.display();
  //Body.setPosition(package.body,{x:helicopter.x-5, y:100});
  

  drawSprites();
  
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    helicopter.x += 20;
    Body.translate(package.body, {x:20,y:0});
  }

  if(keyCode === LEFT_ARROW)
  {
    helicopter.x -= 20;
    Body.translate(package.body, {x:-20,y:0});
  }

  if(keyCode === DOWN_ARROW)
  {
    Body.setStatic(package.body, false);
  }
}