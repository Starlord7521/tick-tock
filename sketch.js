
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var hr, min, sec;
function setup() {
  createCanvas(800,400);
  hr = hour();
  min = minutes();
  sec = seconds();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}