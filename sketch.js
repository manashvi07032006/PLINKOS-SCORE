const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var engine, world;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var count = 0;
var particle;
var turn = 0;
var gameState = "PLAY";
var line;
var value = [500, 500, 500, 200, 100, 500, 200, 300, 100, 500]

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,800,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  textSize(30)
  fill("white");
  text("Score : "+score,20,30);
  
  for(i=1, a=20; i<value.length, a<800; i++, a+=80){
     textSize(24);
     fill("orange");
     text(value[value.length-i], a, 650);
  }
  Engine.update(engine);  

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

   ground.display();
   rectMode(CENTER);
   fill("yellow");
   rect(400, 450, 800, 10);
   
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      
     if(particle.body.position.x >0 &&particle.body.position.x <80){
       score+=500;
       particle = null;
     }
     else if(particle.body.position.x >80 && particle.body.position.x <160){
       score+=100;
       particle = null;
     }
     else if(particle.body.position.x >160 && particle.body.position.x <240){
       score+=300;
       particle = null;
     }
     else if(particle.body.position.x >240 && particle.body.position.x <320){
       score+=200;
       particle = null;
     }
     else if(particle.body.position.x >320 && particle.body.position.x <400){
       score+=500;
       particle = null;
     }
     else if(particle.body.position.x >400 && particle.body.position.x <480){
       score+=100;
       particle = null;
     }
     else if(particle.body.position.x >480 && particle.body.position.x <560){
       score+=200;
       particle = null;
     }
     else if(particle.body.position.x >560 && particle.body.position.x <640){
       score+=500;
       particle = null;
     }
     else if(particle.body.position.x >640 && particle.body.position.x <720){
       score+=500;
       particle = null;
     }
     else if(particle.body.position.x >720 && particle.body.position.x <800){
       score+=500;
       particle = null;
     }
      if(count>=5){
      gameState = "END";
    }
  }
}
      fill(173, 255, 47);
      textSize(70);
    if(gameState === "END" && score<2500){
      text("GAME OVER !!", 200, 350);
    }
    if(gameState === "END" && score>=2500){
      text("YOU WIN !!", 200, 350);
    }
}

function mousePressed(){
  if(gameState!="END"){
  count++;
  particle = new Particle(mouseX, 10, 10, 10);
  console.log(count);
  }
}