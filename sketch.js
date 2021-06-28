const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var bg;
var sw1, sw2;

function preload(){
  bg =loadImage("snow3.jpg");

 
}
function setup() {
  createCanvas(1500,700);
}

function draw() {
  background(bg);

  spawnSs();
  drawSprites();
}

function spawnSs(){
  if (frameCount % 20 === 0){
    var snoww = createSprite(400,165,10,40);
    snoww.velocityX = -6;
 
    
     // //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: snoww.addImage(sw1);
               break;
       case 2: snoww.addImage(sw2);
               break;
       
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     snoww.scale = 0.5;
     snoww.lifetime = 300;
  }
 }