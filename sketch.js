const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;

var rground, lground;

var b1, b2, b3, b4, b5, b6, b7;
var b8, b9, b10, b11, b12;
var b13, b14, b15;
var b16;

var lb1, lb2, lb3, lb4, lb5;
var lb6, lb7, lb8, lb9;
var lb10, lb11, lb12;

var chain;
var poly;




function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;


  rground  = new Ground(450, 350, 300, 20);
  lground = new Ground(800, 200, 250, 20);

  //layer1, right
  b1 = new Box(205, 200, 50, 70, "pink");
  b2 = new Box(215, 200, 50, 70, "pink");
  b3 = new Box(225, 200, 50, 70, "pink");
  b4 = new Box(235, 200, 50, 70, "pink");
  b5 = new Box(245, 200, 50, 70, "pink");
  b6 = new Box(255, 200, 50, 70, "pink");
  b7 = new Box(265, 200, 50, 70, "pink");

//layer2, right

b8  = new Box(250, 190, 50, 70, "green");
b9  = new Box(260, 190, 50, 70, "green");
b10 = new Box(270, 190, 50, 70, "green");
b11 = new Box(280, 190, 50, 70, "green");
b12 = new Box(290, 190, 50, 70, "green");

//layer3, right

b13 = new Box(260, 180, 50, 70, "blue");
b14 = new Box(270, 180, 50, 70, "blue");
b15 = new Box(280, 180, 50, 70, "blue");  

//layer4, right

b16 = new Box(270, 170, 50, 70, "grey");


//layer1, left

lb1 = new Box(500, 150, 50, 70, "pink" );
lb2 = new Box(510, 150, 50, 70, "pink");
lb3 = new Box(520, 150, 50, 70, "pink");
lb4 = new Box(530, 150, 50, 50, "pink");
lb5 = new Box(540, 150, 50, 70, "pink");

//layer2, left

lb6 = new Box(510, 125, 50, 70, "green");
lb7 = new Box(520, 125, 50, 50, "green");
lb8 = new Box(530, 125, 50, 70, "green");
lb9 = new Box(540, 125, 50, 70, "green");

//layer3, left

lb10 = new Box(520, 100, 50, 70, "grey");
lb11 = new Box(530, 100, 50, 70, "grey");
lb12 = new Box(540, 100, 50, 70, "grey");




var optionsp = {
  isStatic: "false",
  density: 0.2
}

poly = Bodies.circle(200,390, 20, optionsp );
World.add(world,poly);

chain = new Chain(poly.body, {x: 100, y:100});
//World.add(world, chain);

}

function draw() {
  background("white");  
  drawSprites();
  Engine.update(engine);
    


    ellipseMode(RADIUS);
    ellipse(poly.position.x, poly.position.y, 20, 20)

  rground.display();
  lground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();
  b15.display();

  b16.display();


  lb1.display();
  lb2.display();
  lb3.display();
  lb4.display();
  lb5.display();

  lb6.display();
  lb7.display();
  lb8.display();
  lb9.display();

  lb10.display();
  lb11.display();
  lb12.display();

  chain.display();
  
  

  

}