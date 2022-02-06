
var ball;
function setup(){
  createCanvas(400,400)
 ball=createSprite(5,8,70,70)

}
function draw(){
  background("pink")
  if(keyDown("RIGHT")){

 ball.position.x=ball.position.x+5;
 }
if(keyDown("LEFT")){
  ball.position.x=ball.position.x-5;
}
if(keyDown("UP")){
  ball.position.y=ball.position.y+5;
}
if(keyDown("DOWN")){
  ball.position.y=ball.position.y-5;

}
  drawSprites();
}
