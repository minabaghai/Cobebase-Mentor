let snakey;
let food;
let score;
let diff = 4;


function setup() {
  createCanvas(300, 300);
  snakey = new Snake();
  food = new Food();
  score = new Score();
}

function draw() {
  background(200)
  background("black")
  noStroke()
  snakey.move()
  snakey.show()
  food.show()
  score.show()
  if (snakey.eat(food.x, food.y)) {
    newLocation()
    score.val += 5
  }
  if(snakey.isGameOver()) {
    fill('red')
    rect(1, 1, width, height)
    fill('black')
    textSize(30)
    textAlign(CENTER)
    text('GAME OVER!', width/2, height/2)
    textSize(20)
    text('Final Score: ' + score.val, width/2, height - height/2.5)
    noLoop()
  }
}

function Score() {
  this.val = 0

  this.show = function() {
    fill('white')
    textSize(20);
    text('SCORE: ' + this.val, width - 100, height - 10);
  }
}

function Food() {
  this.x = random(10, width - 10)
  this.y = random(10, height - 10) 
  
  this.show = function() {
    fill('lightblue')
    circle(this.x, this.y, 10)
  }
}

function newLocation() {
  food.x = random(10, width - 10)
  food.y = random(10, height - 10)
}

function Snake() {
  this.x = 10;
  this.y = 10;
  this.xspeed = 3;
  this.yspeed = 0;
  this.length = 0;
  this.tail = []

  this.isGameOver = function() {
    for (var i = 0; i < this.tail.length; i += 1) {
      var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y)
      if (d < 1) {
        return true
      }
    }
    return false
  }
  
  this.move = function() {
    // for adding to snake, need to put new circle in place of current circle (the "head"),
    // and shift everything else in the tail over by 1.
    for (var i = 0; i < this.tail.length - 1; i += 1) {
      this.tail[i] = this.tail[i + 1]
    }
    this.tail[this.length - 1] = createVector(this.x, this.y)
    
    this.x += this.xspeed;
    this.y += this.yspeed;
    
    this.x = constrain(this.x, 5, width - 5)
    this.y = constrain(this.y, 5, height - 5)
  }
  
  this.show = function() {
    fill('lightgreen')
    for (var i = 0; i < this.length; i += 1) {
      fill('lightgreen')
      circle(this.tail[i].x, this.tail[i].y, 12)
    }
    circle(this.x, this.y, 12)
  }

  
  this.setDir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.eat = function(x, y) {
    var d = dist(this.x, this.y, x, y)
    if (d < 8) {
      this.length += 1
      return true
    } else {
      return false
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snakey.setDir(0, -1 - diff);
  } else if (keyCode === DOWN_ARROW) {
    snakey.setDir(0, 1 + diff);
  } else if (keyCode === RIGHT_ARROW) {
    snakey.setDir(1 + diff, 0);
  } else if (keyCode === LEFT_ARROW) {
    snakey.setDir(-1 - diff, 0);
  }
}