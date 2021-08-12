var greenbox ;
var redbox ;
var blackbox,yellowbox,pinkbox,graybox;


function setup() {
  createCanvas(800,400);
  greenbox=createSprite(400, 200, 100, 50);
  greenbox.shapeColor="green";
  redbox=createSprite(580, 200, 50, 100);
  redbox.shapeColor="red";
  blackbox=createSprite(0, 300, 100, 50);
  blackbox.shapeColor="black";
  blackbox.velocityX=5;
  yellowbox=createSprite(150, 150, 50, 100);
  yellowbox.shapeColor="yellow";
  pinkbox=createSprite(800, 300, 100, 50);
  pinkbox.shapeColor="pink";
  pinkbox.velocityX=-5;
  graybox=createSprite(320, 250, 50, 30);
  graybox.shapeColor="gray";
}

function draw() {
  background(255,255,255);  




  greenbox.x=mouseX;
  greenbox.y=mouseY; 

if(isTouching(greenbox,redbox))
 
 {

  greenbox.shapeColor="grey"
  redbox.shapeColor="grey"
 }

else{
greenbox.shapeColor="green";
redbox.shapeColor="red";

}

if(isTouching(yellowbox,greenbox)){
greenbox.shapeColor="grey";
yellowbox.shapeColor="grey";

}
else{
greenbox.shapeColor="green";
yellowbox.shapeColor="yellow";



}

bounceOff(blackbox,pinkbox);
bounceOff(greenbox,pinkbox)

  drawSprites();
}



  










