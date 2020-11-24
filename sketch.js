const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //creating physics engine
  engine = Engine.create();

  //creating a physical world using the physics engine created
  world = engine.world;

  var ground_options = {
    isStatic : true
  }

  //creating a rectangular body in the world
  ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
  //adding the body to the world
  World.add(world,ground);

  //console.log(object.position.x)

  var ball_options = {
    restitution : 1.0
  } 

  //creating the circular body in the world
  ball = Bodies.circle(200,100,20,ball_options);
  //adding the body to the world
  World.add(world,ball);


  
}

function draw() {
  background(255);  
  Engine.update(engine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);

  fill("orange");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}