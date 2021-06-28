const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var BGimg
var snow,max,ice=[]
function preload() {
    BGimg=loadImage("Snowfall.jpg")
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

if(frameCount%300===0){
    for(var i=0;i<max; i++){
        ice.push(new Snow(random(0,windowWidth),random(-100,50)))

    }
}
   
}

function draw(){
    if(BGimg){
        background(BGimg)
    }
    Engine.update(engine)
    for(var i=0;i<max; i++){
        ice[i].display()
    ice[i].changePosition()

    }
    drawSprites()
}
