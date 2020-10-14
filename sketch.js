const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var object;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  object = Bodies.rectangle(200,100,50,50);
  World.add(world,object);
  console.log(object.type);
  console.log(object.position.x);
  var ground_options = {isStatic:true};
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  var ball_options = {restitution:1.0};
  ball = Bodies.circle(200,100,20,ball_options);
  ball.position.x = 400;
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(200,100,20,20);
}