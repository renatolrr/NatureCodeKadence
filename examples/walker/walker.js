var w;

function setup() {
  createCanvas(600, 400);
  w = new Walker();
}

function draw() {
  background(51);
  w.walk();
  w.display();
}

function Walker(){
  this.pos = createVector(width/2, height/2);
  
  this.walk = function(){
    
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.pos = this.pos.add(this.vel);
  }
  
  this.display = function(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
  
  
  