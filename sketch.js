let snakey;
let food;

function setup() {
  createCanvas(300, 300);
  snakey = new Snake();
  food = new Food();
}

function draw() {
  background(200);
  background("lightblue");
  snakey.move()
  snakey.show()
  food.show()
  if (snakey.eat(food.x, food.y)) {
    newLocation()
  }
}

function Food() {
  this.x = random(width)
  this.y = random(height)
  
  this.show = function() {
    fill('red')
    circle(this.x, this.y, 10)
  }
}

function newLocation() {
  food.x = random(width)
  food.y = random(height)
}

function Snake() {
  this.x = 10;
  this.y = 10;
  this.xspeed = 1;
  this.yspeed = 0;
  
  this.move = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    
    this.x = constrain(this.x, 5, width - 5)
    this.y = constrain(this.y, 5, height - 5)
  }
  
  this.show = function() {
    fill('lightgreen')
    circle(this.x, this.y, 10)
  }
  
  this.setDir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.eat = function(x, y) {
    var d = dist(this.x, this.y, x, y)
    if (d < 3) {
      return true
    } else {
      return false
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snakey.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snakey.setDir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snakey.setDir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snakey.setDir(-1, 0);
  }
}