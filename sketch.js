const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
createCanvas(800, 800);
engine = Engine.create();
world = engine.world;

ground_ = new ground(width/2,height,width,20);


for (var k = 0; k <=width; k = k + 80) {
divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
}


for (var j = 75; j <=width; j=j+50){
    plinkos.push(new plinko(j,75));
}

for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new plinko(j,175));
}

for (var j = 75; j <=width; j=j+50){
    plinkos.push(new plinko(j,275));
}

for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new plinko(j,375));
  }
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  ground_.display();
  
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  if(frameCount%60 == 0){
    particles.push(new particle(random(width/2-30, width/2-30), 10, 10));
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var l = 0; l < particles.length; l++){
    particles[l].display();
  }
}