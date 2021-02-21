function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,20,20)
  stand = new Ground(600, 20, 20 ,20)
  

  
  box4 = new Box(210,235,20,40)
  box5 = new Box(240,235,20,40)
  box6 = new Box(270,235,30,40)
  box7 = new Box(300,235,30,40)
  box8 = new Box(330,235,30,40)
  box9 = new Box(360,235,30,40)
  box10 = new Box(390,235,30,40);
  box12 = new Box()
}

function draw() {
  background(255,255,255);  
  drawSprites();
}