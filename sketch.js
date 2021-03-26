var sec, min, hr
var secangle , minangle , hrangle

function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES)
}

function draw() {
  background(0);  
 
  translate(200,200)
  rotate(-90)
  
  sec = second();
  min = minute();
  hr = hour();
 
  secangle = map(sec,0,60,0,360)
  minangle = map(min,0,60,0,360);
  hrangle = map(hr%12,0,12,0,360);
  

  //drawing seconds hand
  push ()
  rotate(secangle)
  stroke("red")
  strokeWeight(6)
  line(0,0 , 100,0)
  pop()

  //minute hand
  push ()
  rotate(minangle)
  stroke("cyan")
  strokeWeight(6)
  line(0,0 , 70,0)
  pop()

  //hour hand
  push ()
  rotate(hrangle)
  stroke("purple")
  strokeWeight(6)
  line(0,0 ,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)

  //drawing the arcsssss

  strokeWeight(10)
  noFill()

  //seconds
  stroke("pink")
  arc(0,0,300,300,0,secangle) 

  //minute
stroke("yellow")
arc(0,0,280,280,0,minangle) 

  //hour
  stroke("lime")
  arc(0,0,260,260,0,hrangle)

}





//radians OR degrees